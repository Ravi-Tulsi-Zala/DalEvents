import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthData} from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { log } from 'util';

@Injectable({
    providedIn:"root"
})
export class AuthService {
    private token: String; 
    private authstatusListener = new Subject<boolean>();
    private isAuthenticated = false;
    private tokenTimer: any;
    constructor(private http:HttpClient,private router:Router){}    
    getToken()
    {
        return this.token;
    }
    
    getAuthstatusListener()
    {
        return this.authstatusListener.asObservable();
    }

    getisAuth(){
        console.log("anu here:::",this.isAuthenticated)
        return this.isAuthenticated;
    }
    login (email:String, password :String){
        const authData: AuthData ={email:email, password:password};
        this.http.post<{token: string, expiresIn: number}> ("http://localhost:3000/login/login",authData)
        .subscribe(response =>{
            console.log(response);
            const token = response.token;
            this.token = token; 
            if(token){
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.authstatusListener.next(true);
                const now = new Date;
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                this.saveAuthData(token,expirationDate);
                this.router.navigate(['/']);
            }
        });
    }  

    autoAuthUser(){
        const authinformation = this.getAuthData();
        if(!authinformation){
            return;
        }
        const now = new Date;
        const expiresInsecs = authinformation.expirationDate.getTime() - now.getTime();
        if(expiresInsecs > 0){
            this.token = authinformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresInsecs / 1000);
            this.authstatusListener.next(true);
            
        }
    }
    logout(){
        this.token=null;
        this.isAuthenticated=false;
        this.authstatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }

    private saveAuthData(token:string , expirationDate: Date){
        localStorage.setItem("token",token);
        localStorage.setItem("expirationDate",expirationDate.toISOString());
    }
    
    private clearAuthData(){
        localStorage.removeItem("token");
        localStorage.removeItem("expirationDate");
    }

    private getAuthData(){
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expirationDate");
        if(!token || !expirationDate){
            return;
        }
        return{
            token : token,
            expirationDate: new Date(expirationDate)
        }
    }

    private setAuthTimer(duration:number){
        this.tokenTimer = setTimeout(()=> {
            this.logout();
        }, duration * 1000);  // converting into milliseconds
    }
}