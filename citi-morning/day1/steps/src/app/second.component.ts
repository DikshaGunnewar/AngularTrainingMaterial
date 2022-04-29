import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector:'app-second',
    template: `<h1>Second Component</h1>
    <ng-content select="p.player"></ng-content>
        <ng-content select="button"></ng-content>
        <ng-content select="p"></ng-content>
        <ng-content select="ul"></ng-content>
        <h3>{{ title }}</h3>
        <h1>{{power}}</h1>
        <input type="text" #ti2>
        <button (click)="clickHander(ti2.value)">Emit Message Event</button>
    `,
    styles: [``]
    //inputs:['title'];
})
export class SecondComponent{
    @Input('secret') title:string = 'DefaultValue';
    @Input() power: any = 0;
    @Output() messageEvent:EventEmitter<string> = new EventEmitter();


    clickHander(message:string){
        this.messageEvent.emit(message);
    }
}