// // template reference, [(NgModel)] or the class name;

// import { Component } from "@angular/core";

// @Component({
//     selector: 'app-root',
//     template: `
//      <h1>Parent Component</h1>
//      <hr>
//      <app-child [power]="appPower" [version]="appVersion" *ngIf="show"></app-child>
//      <app-child [power]="appPower" [version]="appVersion" *ngIf="show"></app-child>
//      <app-child [power]="appPower" [version]="appVersion" *ngIf="show"></app-child>
//      <!-- <button (click)="increasePower()">Change Power</button> -->
//      <button (click)="increaseChildPower()">Increase Power</button>
//      <button (click)="decreaseChildPower()">Decrease Power</button>
//      <button (click)="changeChildVersion()">Change Version</button>
//      <button (click)="toggleShow()">Show / Hide</button>
//     `,
//     styles: []
//   })
//   export class AppComponent implements AfterViewInit {
//     title = 'step2-lifecycle';
//     show = true;
//     appPower = 0;
//     appVersion = 0;
  
//     @ViewChildren(ChildComponent) childComps!:QueryList<ChildComponent>;
  
//     constructor(){}
  
//     ngAfterViewInit(){
//       console.log(this.childComps);
//     }
  
//     increasePower(){
//       this.appPower = this.appPower+1;
//     }
//     changeChildVersion(){
//       this.appVersion = Math.round(Math.random() * 100);
//     }
//     toggleShow(){
//       this.show = !this.show;
//     }
//     increaseChildPower(){
//       this.childComps.first.increasePower();
//     }
//     decreaseChildPower(){
//       this.childComps.first.decreasePower();
//     }
//   }