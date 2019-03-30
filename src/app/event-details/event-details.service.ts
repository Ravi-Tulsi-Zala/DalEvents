import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EventDetails} from './event-details'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Service to get Event Details data from DB
export class EventDetailsService {

  //Link used to connect to Db
  private _url : string ="http://localhost:3000/events/"

  constructor(private http:HttpClient) { }

  getEventDetails():Observable<EventDetails[]>{
    return this.http.get<EventDetails[]>(this._url);
  }

  getParticularEventDetails(event:string):Observable<EventDetails[]>{
    return this.http.get<EventDetails[]>(this._url+event);
  }

}
