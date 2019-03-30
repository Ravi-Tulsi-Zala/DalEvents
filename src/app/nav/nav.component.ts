import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService} from '../login/auth.service'
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private fname : string;
  
  private rsub;
  private authListenerSubs: Subscription;
  
  constructor(private authService : AuthService , private router: Router) { }

  ngOnInit() {
  
    this.rsub = this.router.events.subscribe(()=>{
      this.userIsAuthenticated = this.authService.getisAuth();
      this.fname = this.authService.getFirstname();
    });
    
   
    this.authListenerSubs = this.authService
    .getAuthstatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }
  
  onlogout(){
    this.authService.logout(); 
  }

  onSubmit(searchString: any) {
   
    this.router.navigateByUrl('/?s=' + searchString);
    
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }
}
