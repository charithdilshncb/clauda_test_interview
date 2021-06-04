import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userID: any;
  userData: any;

  constructor(private router: Router, private route: ActivatedRoute, private userService:UserService) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.getProfileDetails(this.userID)
  }

 public getProfileDetails(id : any){
  this.userService.getUserByID(id)
  .subscribe(res => {
    this.userData = res;
  }, (error) => {
    console.log("error from getting user data", error);
  })

  }

}
