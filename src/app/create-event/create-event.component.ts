import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
import { ViewChild, ElementRef, NgZone } from '@angular/core';


import { HttpClient } from '@angular/common/http';

=======
import { HttpClient } from '@angular/common/http';


>>>>>>> 90ac9a7dd93265f8e0195ab0b3831f66cb50ca2f
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

<<<<<<< HEAD
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
=======


EventRegister(form) {

  console.log(form.value);
  const req = this.http.post('http://localhost:3000/events', {
    eventId: Math.floor((Math.random() * 600) + 70),
    imageUrl: "../../assets/images/health.jpg",
    title: form.value.event_name,
    description: form.value.event_description,
    date: form.value.event_date,
    host: "DAL",
    price: form.value.event_price,
    category: form.value.event_category,
    location: form.value.event_location
      })
        .subscribe(
          res => {
            console.log(res);
            alert("Event Created....Go back to Homepage")
          },
          err => {
            console.log("Error occured");
          }
        );



  }



  constructor(private http: HttpClient){
   }

>>>>>>> 90ac9a7dd93265f8e0195ab0b3831f66cb50ca2f


  }



}
