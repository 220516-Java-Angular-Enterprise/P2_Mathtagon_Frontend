import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'game-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {

  constructor(private _userService: UserService) { }

  isLoggedIn!: boolean;

  ngOnInit(): void {
    this._userService.isAuthenticated$.subscribe(a => {
      this.isLoggedIn = a;
    })
  }

}
