import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';
import { UserProfileComponent } from '../user-profile/user-profile.component';


@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit , OnDestroy{
  isLoading = true;
  public user_email: String;
  private authstatusSubs: Subscription;
  static user_email: any;
  constructor(public authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
    this.authService.login(form.value.email, form.value.password);
  }
  ngOnInit(){
    this.authstatusSubs = this.authService.getAuthstatusListener().subscribe(
      authStatus =>{
        this.isLoading = false;
      }
    );
    }
    ngOnDestroy(){
      this.authstatusSubs.unsubscribe();
    }
  }
