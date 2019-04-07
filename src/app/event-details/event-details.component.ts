import { Component, OnInit,OnDestroy,NgModule } from '@angular/core';
import { EventDetailsService } from './event-details.service';
import {ActivatedRoute} from '@angular/router';
import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { CheckoutComponent } from '../checkout/checkout.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})

export class EventDetailsComponent implements OnInit, OnDestroy{

  public allEventdetails=[];
  public similarEvents=[];
  public particularEvent=[];
  //public checkout:CheckoutComponent;
  private routeSub:any;
  slug:string;
  

  constructor(private _eventDetailService :EventDetailsService,
    private route: ActivatedRoute,
    public checkout:CheckoutComponent,
    private http: HttpClient,
    ) { }

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

  manageLike(btn){
    let str :  string = (<HTMLInputElement>document.getElementById(btn)).getAttribute('name');
    console.log(str);

    // this.http.get("http://localhost:3000/events/searchByTag/" + str).subscribe(
    //   response => {
    //     console.log(response);
    //     this.cardsByCategory = response;
    //   }
    // )
  }

  registerForEvent(){
    console.log(this.particularEvent['price'])
    if (Number(this.particularEvent['price']) >0){
        this.checkout.openDialog();
     }else{
      Swal.fire(
        'Thank You!',
        'You have successfully Registered for the event!',
        'success'
      );
     }
  }

}
