import { Component, OnInit } from '@angular/core';
import { AuthData } from './login/auth-data.model';
import {AuthService} from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DalEvents';
  constructor(private authservice:AuthService){}
  ngOnInit(){

  }
}
