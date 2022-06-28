import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  user: User = {
    userID: '',
    username: '',
    password: '',
    email: '',
    fullname: '',
    age: 0,
    games: []
  };

  ngOnInit(): void {
    //this.userService.getUserHistory().then(u => {
    //  this.user = u;
    //})
  }


}
