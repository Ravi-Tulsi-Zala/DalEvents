import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './login/auth.guard';

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
    path: 'create-event', component: CreateEventComponent,canActivate:[AuthGuard]
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user-profile', component: UserProfileComponent,canActivate:[AuthGuard]
  },
  {
    path :'**', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
