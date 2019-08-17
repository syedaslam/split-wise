import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  constructor() { }
  togglee: (boolean) = false;

  list = [
    {
      name: 'Home',
      link: 'home-page',
      imageUrl:"home",
      path:'<app-groups>'
    },
    {
      name: 'Settings',
      link: 'home-page',
      imageUrl:"settings",
      path:'<app-account-settings>'
    },
    {
      name: 'Log out',
      link: 'home-page',
      imageUrl:"power_settings_new",
      path:'<app-account-settings>'
    }
  ]




  ngOnInit() {
  }

}
