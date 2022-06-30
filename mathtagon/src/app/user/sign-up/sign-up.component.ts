import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  displayFormSubmitError: boolean = false;

  user: any = {};

  formLabels = {
    username: 'Username',
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    age: 'Age',
  };

  ngOnInit(): void {}

  processForm(signUpForm: NgForm): void {
    if (signUpForm.form.status === 'VALID') {
      this.userService.register(this.user).then(s =>{
        console.log(s);
        alert(`Registration Successful!\nYour user ID is ${s}. You will be directed to the Login!`);
        this.router.navigateByUrl('/login');
      }).catch(err => {
        console.log(err);
      })
    }
    
    else this.displayFormSubmitError = true;
    signUpForm.reset();
  }

  // confirmSignUp() {
  //   this.dialog.open(DialogComponent);
  // }
}
