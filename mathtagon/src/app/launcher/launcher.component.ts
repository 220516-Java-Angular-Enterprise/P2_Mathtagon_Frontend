import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'game-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {

  constructor(private _userService: UserService) { }

  isLoggedIn!: boolean;
  player!: User;

  ngOnInit(): void {
    this._userService.isAuthenticated$.subscribe(a => {
      this.isLoggedIn = a;
    });
    this._userService.user$.subscribe(p => {
      this.player = p;
    })
  }

}
