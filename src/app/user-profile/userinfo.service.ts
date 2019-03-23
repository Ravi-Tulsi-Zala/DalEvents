import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import {Userdetails} from './Userdetails'

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

 

  private _url : string ="http://localhost:3000/test/"

  constructor(private http:HttpClient){}

  getUserInfo():Observable<Userdetails[]>{
    return this.http.get<Userdetails[]>(this._url);
  }

}
