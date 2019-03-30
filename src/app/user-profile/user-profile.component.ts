import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService} from '../login/auth.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  public firstname : string;
  public lastname : string;
  public bannerNo : string;
  public email : string;
  public url : string;
  public image : string;



  constructor(private http: HttpClient,private authService : AuthService) {



    this.email=this.authService.getemailid();
    console.log(this.email);

    this.url='http://localhost:3000/test/'+this.email;

    this.http.get(this.url).subscribe(data => {

          this.firstname = data["firstname"];
            this.lastname = data["lastname"];
              this.bannerNo = data["banner_id"];
                this.email = data["email"];
                this.image = data["category"];

          //console.log(data["username"]);

        });



  }

  ngOnInit() {

  }

}
