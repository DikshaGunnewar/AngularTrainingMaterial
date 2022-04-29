import { AfterViewInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Parent Component</h1>    
  <app-child #boxer [power]="appPower"  [version] ="appVersion" *ngIf="show"></app-child>
<hr>
<!-- <button (click)="increasePower()">Increase Power</button> -->
<button (click)="increaseChildPower()" >Increase</button>
<button (click)="decreaseChildPower()">Decrease</button>
<button (click)="toggle()">show/hide</button>
<button (click)="changeChildVersion()">Change child version</button>

`,
  styles: []
})
export class AppComponent implements AfterViewInit {
  title = 'step2-lifecycle';
  appPower = 0;
  show = false;
  appVersion = 0;

  @ViewChild('boxer')ChildComp: any;  


  ngAfterViewInit(): void {
    console.log(this.ChildComp);
  }
  
  toggle(){
    this.show = !this.show;
  }

  changeChildVersion(){
    this.appVersion = Math.round(Math.random() *1000);
  }

  increaseChildPower(){
    this.ChildComp.increasePower();
  }

  decreaseChildPower(){
   this.ChildComp.decreasePower();
  }
}
