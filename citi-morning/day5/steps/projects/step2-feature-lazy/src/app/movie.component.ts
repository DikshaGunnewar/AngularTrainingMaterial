import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  template: `
    <p> movie works! </p>

    <a [routerLink]="['/movie']">Movie</a> | 
  <a [routerLink]="['/movies']">Movie List</a> | 
  <a [routerLink]="['/addmovie']">Add Movie</a> | 
  <a [routerLink]="['/editmovie']">Edit Movie</a>
  `,
  styles: []
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
