import { Component, Injectable, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, first, last, of, Subject, take } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  
  tmpUser: User = {
    userID: '',
    username: '',
    password: '',
    email: '',
    fullname: '',
    age: 0,
    games: []
  };

  constructor(private _userService: UserService, private _router: Router) { }

  displayFormSubmitError: boolean = false;

  formLabels = {
    username: 'Username',
    password: 'Password'
  };

  ngOnInit(): void {
  }

  processForm(loginForm: NgForm): void {
    if(loginForm.form.status === 'VALID') {
      console.log('Trying to login');

      this._userService.login(this.tmpUser).then(() => {
          alert(`Login Successful. Heading to arena.`);
          this._router.navigateByUrl('/new-game');
        }).catch(err => {
          console.log(err);
        });
        
        loginForm.reset();
    }

    else {
      this.displayFormSubmitError = true;
    }

  }

  logIn(): void {
    this._router.navigateByUrl('/login');
  }
}
