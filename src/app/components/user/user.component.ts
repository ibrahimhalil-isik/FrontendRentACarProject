import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User;
  dataLoaded = false;

  constructor(
    private userService:UserService,
    private activatedRoute:ActivatedRoute
    ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params['userId']){
        this.getUserById(params['userId']);
      }
    })    
  }     


  getUserById(userId:number) {
    this.userService.getUserById(userId).subscribe(response=>{
      this.users = response.data
      this.dataLoaded = true;
    }) 
  }

}
