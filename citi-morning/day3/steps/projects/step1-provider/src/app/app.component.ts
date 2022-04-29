import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class ="">Angular Sample Application</h1>
      <!-- <app-header [heroesData]="heroes"></app-header> -->
      <app-header></app-header>
      <hr />
      <app-grid></app-grid>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'step1-directives-pipes';
 
}
