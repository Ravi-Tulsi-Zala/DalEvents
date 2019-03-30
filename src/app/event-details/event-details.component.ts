import { Component, OnInit,OnDestroy } from '@angular/core';
import { EventDetailsService } from './event-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit, OnDestroy{

  public allEventdetails=[];
  public similarEvents=[];
  public particularEvent=[];
  private routeSub:any;
  slug:string;
  

  constructor(private _eventDetailService :EventDetailsService,
    private route: ActivatedRoute) { }

  //This function is called when going to the EventDetails Page
  ngOnInit() {
    //Get All Events
     this._eventDetailService.getEventDetails()
      .subscribe((response) => {
        this.allEventdetails=response;
        console.log(this.allEventdetails);
        this.similarEvents.push(this.allEventdetails[0]);
        this.similarEvents.push(this.allEventdetails[4]);
        this.similarEvents.push(this.allEventdetails[3]);})

        //When a card is clicked, show the appropriate Event
        this.routeSub =this.route.params.subscribe(params =>{
          console.log(params)
          this.slug=params['slug']
          this._eventDetailService.getParticularEventDetails(this.slug)
          .subscribe((response) => {
            this.particularEvent=response;
            console.log(this.particularEvent);})
        })
  }

  ngOnDestroy(){
      this.routeSub.unsubscribe()
  }

}
