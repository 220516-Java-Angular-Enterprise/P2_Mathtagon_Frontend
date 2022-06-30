import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  // constructor(
  //   private userService: UserService,
  //   private router: Router,
  //   private auth: AuthService
  // ) {}

  // constructor(private userService: UserService, private router: Router) {}

  constructor() {}

  // users: User[] = [];

  ngOnInit(): void {
    // this.userService.getAllUsers().then((u) => {
    //   this.users = u;
    // });
    // this.auth.user$.subscribe((u) => {
    //   console.log(u);
    // });
  }

  // goToUserId(id: String) {
  //   this.router.navigateByUrl(`users/${id}`);
  // }
}
