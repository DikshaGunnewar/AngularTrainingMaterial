import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
  <!-- <label for="terms">Show Terms and Conditions</label>
  <input type="checkbox" id="terms" (change)="show =!show"/>
  {{show ? 'true': 'false'}}
    <fieldset [hidden]="!show">
      <legend> Terms & Conditions </legend>
      <p>
      The ng new command creates an Angular workspace folder and generates a new application
      skeleton. A workspace can contain multiple applications and libraries.
      The initial application created by the ng new command is at the top level of the workspace.
      </p>
    </fieldset> -->

  <label for="terms">Show Terms and Conditions</label>
  <input type="checkbox" id="terms" [(ngModel)]="show" />
  {{show ? 'true': 'false'}}
    <fieldset *ngIf="show">
      <legend> Terms & Conditions </legend>
      <p>
      The ng new command creates an Angular workspace folder and generates a new application
      skeleton. A workspace can contain multiple applications and libraries.
      The initial application created by the ng new command is at the top level of the workspace.
      </p>
    </fieldset>
    <hr>
    <input type="text" id="fruit" #newfruit (change)="addFruits(newfruit.value)">
    {{Fruits |json}}

   <ol>
     <li>{{Fruits[0]}}</li>
     <li>{{Fruits[1]}}</li>
   </ol>
   <ol>
     <li *ngFor="let fruit of Fruits">{{fruit}}</li>
   </ol>

   <input type="range" min="0" max="10" [(ngModel)]="power"/> Power is {{power}}  
   <ul [ngSwitch]="power">
     <li *ngSwitchCase="5">Recovering</li>
     <li *ngSwitchCase="7">Ready to fight</li>
     <li *ngSwitchCase="8">Strong</li>
     <li *ngSwitchCase="9">Stronger</li>
     <li *ngSwitchCase="10">Un-Beatable</li> 
     <li *ngSwitchDefault>Needs Rest</li>
   </ul>

   <p ngNonBindable>{{username}} ng NonBindable restrict the parsing of cury brases.</p>
  `,
  styles: [
  ]
})
export class SecondComponent  {
  show = false;
  Fruits=['Orange', 'Apple', 'Bananan'];
  power= 0;

  addFruits(newFruit: string){
    this.Fruits.push(newFruit);
  }

}
