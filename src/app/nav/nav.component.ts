import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService} from '../login/auth.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  constructor(private authService : AuthService ) { }

  ngOnInit() {
    this.authListenerSubs = this.authService
    .getAuthstatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }
  onlogout(){
    this.authService.logout(); 
  }
  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
