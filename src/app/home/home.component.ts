import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private data: any;
  private categories: any;
  private subRoute;
  private cardsByCategory: any;
  private noError : boolean=true;
  private pressed :boolean;

  constructor(private http: HttpClient,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("route changed");
      console.log("params: " + params.s);
      console.log(this.noError);
      if (params.s) {
        this.searchEventData(params.s);
      }
     
    })
    this.getEventData();
    this.getCategories();
  }

  getEventData() {
    this.http.get("http://localhost:3000/events/").subscribe(
      response => {
        
        console.log(response);
        this.data = response;
      }
    )
  }

  getCategories(){
    this.http.get("http://localhost:3000/categories/").subscribe(
      response => {
        
        console.log(response);
        this.categories= response;
      }
    )
  }

  onSubmitButton(btn){

    this.data = [];
    let str :  string = (<HTMLInputElement>document.getElementById(btn)).innerText;
    this.http.get("http://localhost:3000/events/searchByTag/" + str).subscribe(
      response => {
        console.log(response);
        this.router.navigateByUrl('/?s=');
        if(Object.keys(response).length === 0)
        {
          
          this.noError=false;
          console.log(this.noError);
         (<HTMLInputElement>document.getElementById("errorDiv")).style.display = "block";
        }
        else
        {
     
          this.noError=true;
          (<HTMLInputElement>document.getElementById("errorDiv")).style.display = "none";
        
          console.log(this.noError);
          this.data = response;
          
        }
        
       
      }
    )
  }

  searchEventData(query: string) {
    this.http.get("http://localhost:3000/events/search/" + query).subscribe(
      response => {
        console.log(response);
        this.data = response;
        if(Object.keys(response).length === 0)
        {
          this.noError=false;
          console.log(this.noError);
         (<HTMLInputElement>document.getElementById("errorDiv")).style.display = "block";
        }
        else
        {
     
          this.noError=true;
          (<HTMLInputElement>document.getElementById("errorDiv")).style.display = "none";
        
          console.log(this.noError);
          this.data = response;
          
        }
        
      }
    )
  }


  ngOnDestroy() {

  }
}
