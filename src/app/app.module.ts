import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './login/auth.service';
import { MatInputModule} from '@angular/material';
import { MatDialogModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsService } from './event-details/event-details.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EventDetailsComponent,
    UserProfileComponent,
    CreateEventComponent,
    NavComponent,
    FooterComponent,
    ForgotPasswordComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  entryComponents:[CheckoutComponent],
  providers: [AuthService,EventDetailsService,CheckoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
