import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  template: `
    <div class="container">
      <h1>Template Driven Form</h1>
      <hr />
      <form novalidate #myForm="ngForm" (ngSubmit)="submitHandler(myForm, $event)">
        <div class="mb-3">
          <label for="uname" class="form-label">User Name</label>
          <input
          #iname="ngModel"
            [(ngModel)]="username"
            required
            name="username"
            type="text"
            class="form-control"
            id="uname"
          />
          <div *ngIf="iname.invalid && iname.touched" class="form-text">Name is required</div>
        </div>
        <div class="mb-3">
          <label for="uage" class="form-label">User Age</label>
          <input
          #iage="ngModel"
            [(ngModel)]="userage"
            required
            name="userage"
            type="number"
            class="form-control"
            id="uage"
          />
          <div *ngIf="iage.invalid && iage.touched" class="form-text">Age is required</div>
        </div>
        <div class="mb-3">
          <label for="umail" class="form-label">User eMail</label>
          <input
          #iemail="ngModel"
            [(ngModel)]="useremail"
            pattern=".+@.+"
            required
            name="usermail"
            type="text"
            class="form-control"
            id="umail"
          />
          <div *ngIf="iemail.invalid && iemail.touched" class="form-text">eMail is required</div>
        </div>
        <button [disabled]="myForm.invalid" type="submit" class="btn btn-primary">Submit</button>
      </form>
    <hr>
      <ul>
        <li>UserName: {{ username }}</li>
        <li>UserAge: {{ userage }}</li>
        <li>UserEmail: {{ useremail }}</li>
      </ul>

      <ol>
        <li *ngIf="iname.touched">User Name is Touched</li>
        <li *ngIf="iname.untouched">User Name is Un Touched</li>
        <li *ngIf="iname.dirty">User Name is Dirty</li>
        <li *ngIf="iname.pristine">User Name is Pristine</li>
        <li *ngIf="iname.valid">User Name is Valid</li>
        <li *ngIf="iname.invalid">User Name is Invalid</li>
      </ol>
      <ol>
        <li *ngIf="iage.touched">User Age is Touched</li>
        <li *ngIf="iage.untouched">User Age is Un Touched</li>
        <li *ngIf="iage.dirty">User Age is Dirty</li>
        <li *ngIf="iage.pristine">User Age is Pristine</li>
        <li *ngIf="iage.valid">User Age is Valid</li>
        <li *ngIf="iage.invalid">User Age is Invalid</li>
      </ol>
      <ol>
        <li *ngIf="iemail.touched">User eMail is Touched</li>
        <li *ngIf="iemail.untouched">User eMail is Un Touched</li>
        <li *ngIf="iemail.dirty">User eMail is Dirty</li>
        <li *ngIf="iemail.pristine">User eMail is Pristine</li>
        <li *ngIf="iemail.valid">User eMail is Valid</li>
        <li *ngIf="iemail.invalid">User eMail is Invalid</li>
      </ol>
    </div>
  `,
  styles: [
    `
    input.ng-touched.ng-invalid{
    border : 5px solid crimson;
  }
  input.ng-touched.ngiemail-valid{
    border : 5px solid darkseagreen;
  }
    `
  ]
})


export class TemplateFormComponent {
  username: any;
  userage: any;
  useremail: any;

  submitHandler(form:NgForm, evt:any){
    // evt.preventDefault();
    // alert("form submitted");
    // console.log("Form ",form);
    // console.log("Event ",evt);
    // console.log(form.controls['userage'].value)
    // console.log(this.userage);
    // console.log(evt.target.userage.value
    if(form.controls['userage'].value < 18){
      alert("you are too young to join us")
    }else if(form.controls['userage'].value > 90){
      alert("you are too old to join us")
    }else{
      evt.target.submit();
    }
  }
}


