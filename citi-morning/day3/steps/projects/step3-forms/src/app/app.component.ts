import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>Parent Component</h1> 
   <app-template-form></app-template-form>
   <app-data-form></app-data-form>
   <app-form-builder> </app-form-builder>
  `,
  styles: []
})
export class AppComponent {
  title = 'step3-forms';
}
