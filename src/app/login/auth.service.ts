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
    private fname:string;
    private email:string;
    constructor(private http:HttpClient,private router:Router){} 
    getToken()
    {
        return this.token;
    }
    
    getFirstname()
    {
        return this.fname;
    }
    getemailid(){
        return this.email;
    }

    getAuthstatusListener()
    {
        return this.authstatusListener.asObservable();
    }

    getisAuth(){
        return this.isAuthenticated;
    }
    // forgot(email:string):Observable<AuthForgot[]>{
    //     return this.http.get<AuthForgot[]>(this._url+email);
    //   }
    //  // Forgot Password
    //  forgot(email:String){
    //     const AuthForgot: AuthForgot ={email:email};
    //     this.http.post<{token: string, expiresIn: number, fname:string}> ("http://localhost:3000/login/forgot-password",AuthForgot)
    //     .subscribe(response =>{
    //         const token = response.token;
    //         this.token = token; 
    //         if(token){
    //             const expiresInDuration = response.expiresIn;
    //             this.fname=response.fname;
    //             this.setAuthTimer(expiresInDuration);
    //             this.isAuthenticated = true;
    //             this.authstatusListener.next(true);
    //             const now = new Date;
    //             const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
    //             this.saveAuthData(token,expirationDate,this.fname);
    //             this.router.navigate(['/']);
    //             return token;
    //         }
    //     }, error =>{
    //         this.authstatusListener.next(false);
    //     });
    // }  
    

    // Login service for validating the user and getting the frontend respnse
    login (email:String, password :String){
        const authData: AuthData ={email:email, password:password};
        this.http.post<{token: string, expiresIn: number, fname:string, email:string}> ("http://localhost:3000/login/login",authData)
        .subscribe(response =>{
            const token = response.token;
            this.token = token; 
            if(token){
                const expiresInDuration = response.expiresIn;
                this.fname=response.fname;
                this.email= response.email;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.authstatusListener.next(true);
                const now = new Date;
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                this.saveAuthData(token,expirationDate,this.fname, this.email);
                this.router.navigate(['/']);
                return token;
            }
        }, error =>{
            this.authstatusListener.next(false);
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
            this.fname = authinformation.fname;
            this.email = authinformation.email;
            this.setAuthTimer(expiresInsecs / 1000);
            this.authstatusListener.next(true);
            
        }
    }
    //Logout part invalidate all tokens and datas
    logout(){
        this.token=null;
        this.isAuthenticated=false;
        this.authstatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }
    // saving authdata to local storage
    private saveAuthData(token:string , expirationDate: Date , fname:string, email:string){
        localStorage.setItem("token",token);
        localStorage.setItem("expirationDate",expirationDate.toISOString());
        localStorage.setItem("fname",fname);
        localStorage.setItem("email",email);
        
    }
    // clearing the local storage
    private clearAuthData(){
        localStorage.removeItem("token");
        localStorage.removeItem("expirationDate");
        localStorage.removeItem("fname");
        localStorage.removeItem("emmail");
    }
    // fetching the details to be set from the local storage
    private getAuthData(){
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expirationDate");
        const fname = localStorage.getItem("fname");
        const email = localStorage.getItem("email");
        if(!token || !expirationDate){
            return;
        }
        return{
            token : token,
            expirationDate: new Date(expirationDate),
            fname : fname,
            email : email
        }
    }
    // Timer set to validate the session tokens
    private setAuthTimer(duration:number){
        this.tokenTimer = setTimeout(()=> {
            this.logout();
        }, duration * 1000);  // converting into milliseconds
    }
}