import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path : 'login', component : LoginComponent
  },
  {
    path: 'event-details', component: EventDetailsComponent
  },
  {
    path: 'create-event', component: CreateEventComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user-profile', component: UserProfileComponent
  },
  {
    path :'**', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
