import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  user: any = {}

  ngOnInit(): void {
    //this.auth.user$.subscribe(u => {
    //  this.user = u;
    //})
  }

}
