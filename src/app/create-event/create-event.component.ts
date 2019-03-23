import { Component, OnInit } from '@angular/core';

import { ViewChild, ElementRef, NgZone } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

EventRegister(form) {

   console.log(form.value);



const req = this.http.post('http://localhost:3000/events', {
  eventId: 67,
  imageUrl: "sasas",
  title: form.value.event_name,
  description: form.value.event_description,
  date: form.value.event_date,
  host: "park victoria",
  price: 20,
  category: form.value.category,
  location: form.value.location
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );

   console.log(req);




}


constructor(private http: HttpClient){
 }



ngOnInit() {


  }



}
