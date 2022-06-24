import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private auth: AuthService) {}

  user: any = {};

  ngOnInit(): void {
    this.auth.user$.subscribe((u) => {
      this.user = u;
    });
  }
}
