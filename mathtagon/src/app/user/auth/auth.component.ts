import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  constructor(private _userService: UserService, private _authForm: AuthFormComponent, private _router: Router) {
  }

  isLoggedIn!: boolean;
    

  ngOnInit(): void {
    this._userService.isAuthenticated$.subscribe(a => {
      this.isLoggedIn = a;
      console.log('isLoggedIn:',this.isLoggedIn);
    });
  }

  logOut(): void {
    this._userService.logOut();
  }

}
