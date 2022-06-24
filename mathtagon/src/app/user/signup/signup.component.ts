import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  displayFormSubmitError: boolean = false;

  user: User = {
    id: '',
    fullname: '',
    email: '',
    username: '',
    password: '',
    age: 0,
  };

  placeholders = {
    fullname: 'Fullname',
    email: 'Email',
    username: 'Username',
    password: 'Password',
    age: 'Age',
  };

  ngOnInit(): void {}

  processForm(signUpForm: NgForm) {
    if (signUpForm.form.status === 'VALID') {
      this.userService.signUp(this.user);
      this.router.navigateByUrl('/signup');
    } else {
      this.displayFormSubmitError = true;
    }
  }
}
