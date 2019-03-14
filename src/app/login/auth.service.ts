import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthData} from './auth-data.model';

@Injectable({
    providedIn:"root"
})
export class AuthService {
    constructor(private http:HttpClient){}
    login (email:String, password :String){
        const authData: AuthData ={email:email, password:password};
        this.http.post("http://localhost:3000/login/login",authData)
        .subscribe(response =>{
            console.log(response); 
        });
    }
}