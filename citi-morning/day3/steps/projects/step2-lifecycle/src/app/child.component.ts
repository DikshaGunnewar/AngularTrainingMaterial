import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-child',
  template: `
    <h1>Child Component</h1>
    <h2>Power: {{power}} </h2>
    <h2>Version- {{version}}</h2>
  `,
  styles: [
  ]
})
export class ChildComponent implements
                                       OnInit,
                                       OnChanges,
                                       DoCheck,
                                       AfterViewInit,
                                       AfterViewChecked,
                                       AfterContentInit,
                                       AfterContentChecked,
                                       OnDestroy {

@Input() power = 0;
@Input() version = 0;
  constructor() {
    console.log("Child Component's constructor called");
   }
  ngDoCheck(): void {
    console.log("Child Component's ngDoCheck called");
  }

  ngOnInit(): void {
    console.log("Child Component's ngOnInit called");
  }

  ngOnChanges(args: any): void{
    console.log(arguments.length,args);
    // if(args.power.currentValue > 5){
    //   this.power = 10;
    // }
    console.log("Child Component's ngOnChanges called");
  }
  ngAfterViewInit(){
    console.log("Child Component's ngAfterViewInit called");
  }
  ngAfterViewChecked(){
    console.log("Child Component's ngAfterViewChecked called");
  }
  ngAfterContentInit(){
    console.log("Child Component's ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("Child Component's ngAfterContentChecked called");
  }
  ngOnDestroy(){
    console.log("Child Component's ngOnDestroy called");
  }

  increasePower(){
    this.power= this.power+1;
  }

  decreasePower(){
    this.power= this.power-1;
  }
}
