import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthFormComponent } from 'src/app/user/auth/auth-form/auth-form.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  constructor(private _userService: UserService) { }

  user!: any;
  
  ngOnInit(): void {
    this._userService.user$.subscribe(u => {
        this.user = u;
        console.log('changing user to',this.user);
      }
    );
  }
}
