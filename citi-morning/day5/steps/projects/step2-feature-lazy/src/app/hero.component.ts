import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <p>
      hero works!
    </p>

    <a [routerLink]="['hero']"> Hero</a> | 
  <a [routerLink]="['/addhero']">Add Hero</a> | 
  <a [routerLink]="['/edithero']">Edit Hero</a> | 
  <a [routerLink]="['/heroes']">Hero List</a> 
  `,
  styles: []
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
