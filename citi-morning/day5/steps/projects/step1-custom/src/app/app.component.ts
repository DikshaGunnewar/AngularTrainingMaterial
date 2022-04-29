import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <citi>
  <p>Hello Citi</p>   
  </citi> -->

  <p citi="red">Hello Diksha</p>   
  <p citi="grey">Hello sneha</p>   
  <p citi="yellow">Hello Venku</p>  
  <p>Hello Laxmi</p> 
   
  `,
  styles: []
})
export class AppComponent {
  title = 'step1-custom';


  
/*
<ng-content select></ng-content>
<router-outlet></router-outlet>

[ngClass]
[ngStyle]

class
*/
}
