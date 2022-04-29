import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
    .box{
      width : 200px;
      height : 200px;
      background-color : cyan;
      padding : 10px;
    }
  `]
})
export class AppComponent {
  title = 'steps';
  companyName = 'Citi India';
  classname="box";
  appPower= 0;


  changeHandler(){
    alert("Hi");
  }


  clickButton(event:any){
    alert("you clicked the button with label : "+event.target.innerHTML)
  }

  increasePower(){
    this.appPower = this.appPower+1
  }

  messageEventHandler(evt:string){
    alert(evt);
  }
}
