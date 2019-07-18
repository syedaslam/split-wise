import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //flower:string="rose";


  replied: boolean;
  title = 'split-wise';
  toggle: (boolean) = false;
  isAddExpns: boolean = false;
  indexTab = 0;
  list = [
    {
      name: 'Home',
      link: 'home-page',
      imageUrl: "home"
    },
    {
      name: 'Settings',
      link: 'home-page',
      imageUrl: "settings"

    },
    {
      name: 'Log out',
      link: 'home-page',
      imageUrl: "power_settings_new"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  waitWhatelse(rep) {
    this.replied = rep;
    console.log(rep);
    console.log("hey come");
  }

}
