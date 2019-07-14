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
      link: 'home-page'
    },
    {
      name: 'Settings',
      link: 'home-page'
    },
    {
      name: 'Log out',
      link: 'home-page'
    }
  ]
}
