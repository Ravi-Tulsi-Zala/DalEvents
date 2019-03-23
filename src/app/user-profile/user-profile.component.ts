import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserinfoService } from './userinfo.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userone =[];
  public userresult =[];

  constructor(private _userdetail :UserinfoService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this._userdetail.getUserInfo().subscribe((response) =>{
    this.userone=response;
    console.log(this.userone);
    this.userresult.push(this.userone[1]);
    })
  }

}
