import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
//import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  displayFormSubmitError: boolean = false;
  isLoggedIn: boolean = false;

  user: any = {};

  formLabels = {
    username: 'Username',
    password: 'Password',
  };

  ngOnInit(): void {}

  processForm(loginForm: NgForm) {
    try {
      if (loginForm.form.status === 'VALID') {
        this.userService.login(this.user);
      }
    } catch (err) {
      this.displayFormSubmitError = true;
    }
    loginForm.reset();
  }

  logIn(): void {
    //this.auth.loginWithRedirect();
  }

  logOut(): void {
    //this.auth.logout();
  }
}
