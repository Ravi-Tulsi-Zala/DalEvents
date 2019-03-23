import { Component, OnInit } from '@angular/core';
import { EventDetailsService } from './event-details.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  public latitude:44.635497458;
  public logitude:-63.58833098;
  public eventdetails=[];
  public similarEvents=[];

  constructor(private _eventDetailService :EventDetailsService) { }

  ngOnInit() {
     this._eventDetailService.getEventDetails()
      .subscribe((response) => {
        this.eventdetails=response;
        console.log(this.eventdetails);
        this.similarEvents.push(this.eventdetails[3]);
        this.similarEvents.push(this.eventdetails[4]);
        this.similarEvents.push(this.eventdetails[5]);})
  }


  editDateTime(selectedEvent: number){
    console.log(this.eventdetails[selectedEvent].date);
  }
}
