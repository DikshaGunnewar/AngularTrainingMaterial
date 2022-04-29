import { Component } from '@angular/core';
import { FriendsServices } from './friends.services';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Citi Friends CRUD Application</h1>
      
      <div>
        <h2>Add New Friends Here</h2>
        <div class="mb-3">
          <label for="firstname" class="form-label">First Name</label>
          <input [(ngModel)]="friend.firstname" type="text" class="form-control" id="firstname" />
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">Last Name</label>
          <input [(ngModel)]="friend.lastname" type="text" class="form-control" id="lastname" />
        </div>
        <div class="mb-3">
          <label for="phonenumber" class="form-label">Phone Number</label>
          <input [(ngModel)]="friend.phone" type="text" class="form-control" id="phonenumber" />
        </div>
        <div class="mb-3">
          <label for="emailid" class="form-label">eMail id</label>
          <input [(ngModel)]="friend.email" type="text" class="form-control" id="emailid" />
        </div>
        <button type="submit" (click)="addFriendHandler()" class="btn btn-primary">Submit</button>
      </div>

      <div>
        <h2>Friends List</h2>
        <table class="table">
        <thead>
          <tr>
            <th>SL #</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>eMail</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let friend of friendsList; index as idx">
            <td>{{ idx + 1 }}</td>
            <td>{{ friend.firstname }}</td>
            <td>{{ friend.lastname }}</td>
            <td>{{ friend.email }}</td>
            <td>{{ friend.phone }}</td>
            <td>
              <button (click)="editFriendHandler(friend._id)" class="btn btn-warning">Edit Info</button>
            </td>
            <td>
              <button (click)="deleteFriendHandler(friend._id)" class="btn btn-danger">Delete Friend</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>

      <div *ngIf="showedit">
      <h2>Edit Friend Info</h2>
      <div class="mb-3">
        <label for="firstname" class="form-label">First Name</label>
        <input [(ngModel)]="edit_friend.firstname" type="text" class="form-control" id="firstname" />
      </div>
      <div class="mb-3">
        <label for="lastname" class="form-label">Last Name</label>
        <input [(ngModel)]="edit_friend.lastname" type="text" class="form-control" id="lastname" />
      </div>
      <div class="mb-3">
        <label for="phonenumber" class="form-label">Phone Number</label>
        <input [(ngModel)]="edit_friend.phone" type="text" class="form-control" id="phonenumber" />
      </div>
      <div class="mb-3">
        <label for="emailid" class="form-label">eMail id</label>
        <input [(ngModel)]="edit_friend.email" type="text" class="form-control" id="emailid" />
      </div>
      <button type="submit" (click)="updateFriendHandler()" class="btn btn-primary">Submit</button>
    </div>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'Citi crud';
  friendsList: any;
  showedit  = false;
  friend = {
    firstname : '',
    lastname : '',
    email : '',
    phone : ''
  }
  edit_friend:any;

  constructor(private fs: FriendsServices) {
    this.refresh();
  }

  //--------------------------------------
  refresh(){
    this.fs.getFriends().subscribe((res) => {
      this.friendsList = res;
      console.log(res);
    });
  }
  //--------------------------------------
  addFriendHandler(){
    this.fs.createFriend(this.friend).subscribe(res=>{
      this.refresh();
      this.friend = {
        firstname : '',
        lastname : '',
        email : '',
        phone : ''
      }
    })
  }
  //--------------------------------------
  editFriendHandler(friendid:any){
    this.fs.editSelectedFriend(friendid).subscribe(res=>{
      this.edit_friend = res;
      this.showedit = true;
    })
  }
  //--------------------------------------
  updateFriendHandler(){
    this.fs.updateFriend(this.edit_friend).subscribe(res=>{
      this.showedit = false;
      this.edit_friend = {};
      this.refresh();
    });
  }
  //--------------------------------------
  deleteFriendHandler(friendid:any){
    this.fs.deleteFriend(friendid).subscribe(res=>{
      this.refresh();
    })
  }
}
