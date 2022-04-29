import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> Welcome to Citi </h1>
  <p>
    To create new component
   Command:- ng g component second --flat -s -t --skipTests=true
  --flat = No directory
  -s =inline style
  -t = inline template

  </p>
  <hr>
  <p>
  To create new appilcation
  command:- ng g application step1-directives-pipes --routing=false --style=css --skipTests=true -t -s
  </p>
  <app-second></app-second>

  `,
})
export class AppComponent {
  title = 'steps';
}
