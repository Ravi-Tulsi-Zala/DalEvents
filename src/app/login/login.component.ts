import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit , OnDestroy{
  isLoading = true;
  private authstatusSubs: Subscription;
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
