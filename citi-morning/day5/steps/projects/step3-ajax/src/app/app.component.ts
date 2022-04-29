import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
   <ul>
     <li *ngFor="let user of userList">{{ user.name }}</li>
   </ul>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  userList:any;
  title = 'step3-ajax';
  constructor(private us:UserService){
   // this.userList = this.us.getUsers();
  }
ngOnInit(){
  this.us.getUsers().subscribe(res=>this.userList = res);
}

}
