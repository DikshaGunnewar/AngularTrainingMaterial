import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  template: `
    <div class="container">
      <h1>Reactive Form using FormBuilder</h1>
      <hr />
      <form [formGroup]="userForm">
        <div class="mb-3">
          <label for="uname" class="form-label">User Name</label>
          <input
          formControlName="username"
            class="form-control"
            id="uname"
          />
          <div *ngIf="this.userForm.get('username')!.touched && this.userForm.get('username')!.invalid" class="form-text">Name is required</div>
        </div>
        <div class="mb-3">
          <label for="uage" class="form-label">User Age</label>
          <input
          formControlName="userage"
            class="form-control"
            id="uage"
          />
          <div *ngIf="this.userForm.get('userage')!.touched && this.userForm.get('useage')!.invalid"  class="form-text">Age is required</div>
        </div>
        <div class="mb-3">
          <label for="umail" class="form-label">User eMail</label>
          <input
          formControlName="useremail"
            class="form-control"
            id="umail"
          />
          <div *ngIf="this.userForm.get('useremail')!.touched && this.userForm.get('useremail')!.invalid" class="form-text">eMail is required</div>
        </div>
        <button  type="submit" class="btn btn-primary" (click)="submitHandler()">Submit</button>
      </form>

      <hr>
      <button class="btn btn-success" (click)="generateNameDeatils()">Fill Name</button>
      &nbsp;&nbsp;
      <button class="btn btn-success" (click)="genearteFormDetails()">Fill Form</button>
    <hr>
      <ul>
      <li>User Name : {{ this.userForm.get('username')!.value }}</li>
        <li>User Age : {{ this.userForm.get('userage')!.value }}</li>
        <li>User Email : {{ this.userForm.get('useremail')!.value }}</li>
      </ul>

      <ol>
        <li *ngIf="this.userForm.get('username')!.touched">User Name is Touched</li>
        <li *ngIf="this.userForm.get('username')!.untouched">User Name is Un Touched</li>
        <li *ngIf="this.userForm.get('username')!.dirty">User Name is Dirty</li>
        <li *ngIf="this.userForm.get('username')!.pristine">User Name is Pristine</li>
        <li *ngIf="this.userForm.get('username')!.valid">User Name is Valid</li>
        <li *ngIf="this.userForm.get('username')!.invalid">User Name is Invalid</li>
      </ol>

      <ol>
        <li *ngIf="this.userForm.get('userage')!.touched">User Age is Touched</li>
        <li *ngIf="this.userForm.get('userage')!.untouched">User Age is Un Touched</li>
        <li *ngIf="this.userForm.get('userage')!.dirty">User Age is Dirty</li>
        <li *ngIf="this.userForm.get('userage')!.pristine">User Age is Pristine</li>
        <li *ngIf="this.userForm.get('userage')!.valid">User Age is Valid</li>
        <li *ngIf="this.userForm.get('userage')!.invalid">User Age is Invalid</li>
      </ol>
      <ol>
        <li *ngIf="this.userForm.get('useremail')!.touched">User eMail is Touched</li>
        <li *ngIf="this.userForm.get('useremail')!.untouched">User eMail is Un Touched</li>
        <li *ngIf="this.userForm.get('useremail')!.dirty">User eMail is Dirty</li>
        <li *ngIf="this.userForm.get('useremail')!.pristine">User eMail is Pristine</li>
        <li *ngIf="this.userForm.get('useremail')!.valid">User eMail is Valid</li>
        <li *ngIf="this.userForm.get('useremail')!.invalid">User eMail is Invalid</li>
      </ol>
    </div>
  `,
  styles: [
    `
     input.ng-touched.ng-invalid{
    border : 5px solid crimson;
  }
  input.ng-touched.ng-valid{
    border : 5px solid darkseagreen;
  }
    `
  ]
})
export class FormBuilderComponent implements OnInit{

 userForm : FormGroup;

 constructor( private fb: FormBuilder){
  this.userForm = this.fb.group({
    username: ['',Validators.required],
    userage: ['', Validators.required, Validators.min(18), Validators.max(90)],
    useremail: ['', Validators.required, Validators.pattern('.+@.+')]
  })
 }

 ngOnInit(){
  console.log(this.userForm.get('username')?.valueChanges.subscribe(val=>console.log(val)));
  
 }

 submitHandler(){
  // console.log(this.userForm.get('username')?.valueChanges.subscribe(val=>console.log()));
 }

 generateNameDeatils(){
   this.userForm.patchValue({
     username: 'Diksha'
   });
 }

 genearteFormDetails(){
   this.userForm.setValue({
     username: 'Diksha',
     userage: '25',
     useremail: 'diksha@gmailcom'
   });
 }

}
