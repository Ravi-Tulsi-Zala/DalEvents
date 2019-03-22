import { Component, OnInit } from '@angular/core';
import { EventDetailsService } from './event-details.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {


  public eventdetails=[];
  public eventdetail;

  constructor(private _eventDetailService :EventDetailsService) { }

  ngOnInit() {
     this._eventDetailService.getEventDetails()
      .subscribe((response) => {
        this.eventdetails=response;
        console.log(this.eventdetails);})
  }

  getSpecifiEvent(){
    this._eventDetailService.getEventDetailsTitle()
      .subscribe((response) => {
        this.eventdetail=response;
        console.log(this.eventdetail);})
  }
}
