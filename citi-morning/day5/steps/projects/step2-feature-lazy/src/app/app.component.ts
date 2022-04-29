import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Application Component</h1>
  <hr>
  <a [routerLink]="['']">Home</a> | 
  <a [routerLink]="['hero']"> Hero</a> |
  <a [routerLink]="['movie']">Movie</a>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'step12-routing-featured';
}
