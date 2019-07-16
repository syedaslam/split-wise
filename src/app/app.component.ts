import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'split-wise';
  toggle: (boolean) = false;

  list = [
    {
      name: 'Home',
      link: 'home-page',
      imageUrl:"home"
    },
    {
      name: 'Settings',
      link: 'home-page',
      imageUrl:"settings"
      
    },
    {
      name: 'Log out',
      link: 'home-page',
      imageUrl:"power_settings_new"
    }
  ]
}
