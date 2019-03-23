import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


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

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("route changed");
      console.log("params: " + params.s);
      if (params.s) {
        this.searchEventData(params.s);
      }
      
      else{

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

    let str :  string = (<HTMLInputElement>document.getElementById(btn)).innerText;
    this.http.get("http://localhost:3000/events/searchByTag/" + str).subscribe(
      response => {
        console.log(response);
        this.cardsByCategory = response;
      }
    )
  }

  searchEventData(query: string) {
    this.http.get("http://localhost:3000/events/search/" + query).subscribe(
      response => {
        console.log(response);
        this.data = response;
      }
    )
  }


  ngOnDestroy() {

  }
}
