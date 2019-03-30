import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() {}

  // onForgot(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   this.authService.forgot(form.value.email);
  // }
   ngOnInit() {
   }

}
