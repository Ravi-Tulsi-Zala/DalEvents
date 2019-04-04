import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';



@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})



export class CreateEventComponent implements OnInit {
 //dateFormat = require('dateformat');
public image_url : string;
public image_name : string;
public event_Id:string;

public event_date_converted : string;
url_image: string = '../assets/images/placeholder.png';
  constructor(private http: HttpClient){
    let now = new Date();


   }

  ngOnInit() {}

onFileSelected($event) {

console.log($event);
console.log($event.target.files[0].name);
this.image_name=$event.target.files[0].name;
this.image_url='../../assets/images/'+this.image_name;
console.log(this.image_url);
//const fileSelected: File = $event.target.files[0];
//
 //this.selecetedFile = event.target.files[0];
 // this.http.post('file:///./app', this.selecetedFile)
 // .subscribe();

// const uploadData = new FormData();
//  uploadData.append('file', fileSelected, fileSelected.name);
//   this.http.post('file:///C:/resume', uploadData)
//     .subscribe((response) => {
//       console.log('set any success actions...');
//       return response;
//     });



var reader = new FileReader();

    reader.onload = (event:any) => {
     this.url_image = event.target.result;
    }
    reader.readAsDataURL($event.target.files[0]);


}



EventRegister(form) {

  //console.log(form.value.event_image);
//  https://angular.io/api/common/DatePipe
//https://angular.io/api/common/formatDate

  this.event_date_converted =  formatDate(form.value.event_date, 'EEEE, MMMM d, y, h:mm:ss a', 'en-CA', '');
  this.event_Id=String(Math.floor((Math.random() * 600) + 70))
  const req = this.http.post('http://localhost:3000/events', {
    eventId: this.event_Id,
    imageUrl: this.image_url,
    title: form.value.event_name,
    description: form.value.event_description,
    date: this.event_date_converted,
    host: "DAL",
    price: form.value.event_price,
    category: form.value.event_category,
    location: form.value.event_location
      })
        .subscribe(
          res => {
            console.log(res);
            window.location.href = "/event-details/"+this.event_Id;
          },
          err => {
            console.log("Error occured");
            alert("There is an error in the form");
          }
        );



  }
}
