import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss']
})
export class AppBodyComponent implements OnInit {
  userData: any;
  users: any;

  constructor(private userService:UserService, private router: Router, private route: ActivatedRoute) {
    this.getUserDetails();
   }

  ngOnInit(): void {
    }

  public getUserDetails() {
      this.userService.getUserDetails()
        .subscribe(res => {
          this.userData = res;
          this.printval()
        }, (error) => {
          console.log("error from getting user data", error);
        })
    }

public printval(){
  this.users = this.userData.data;
}
public goProfile(id:any){
  this.router.navigate(['app-profile',id]);
} 
}
