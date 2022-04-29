import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <h2> RouterLink i.e routerLink=""</h2>
 <ul>
   <li><a routerLink="" routerLinkActive="selectedLink" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
   <li><a routerLink="batman" routerLinkActive="selectedLink">Batman</a></li>
   <li><a routerLink="superman" routerLinkActive="selectedLink">Superman</a></li>
   <li><a routerLink="wonderwomen" routerLinkActive="selectedLink">Wonder Women</a></li>
   <li><a routerLink="aquaman" routerLinkActive="selectedLink">Aquaman</a></li>
   <li><a routerLink="flash" routerLinkActive="selectedLink">Flash</a></li>
   <li><a routerLink="hulk" routerLinkActive="selectedLink">Hulk</a></li>
 </ul>
<input type="range" min="1" max="1000" id="quantity" [(ngModel)]="quantity"> 
  Qaunatity: {{quantity}}

 <hr>
 <ul>
   <h2>RouterLink Array [RouterLing]="['']"</h2>
  <li><a [routerLink]="['']">Home</a></li>
   <li><a [routerLink]="['batman']">Batman</a></li>
   <li><a [routerLink]="['superman']">Superman</a></li>
   <li><a [routerLink]="['wonderwomen']">Wonder Women</a></li>
   <li><a [routerLink]="['aquaman, quantity']">Aquaman</a></li>
   <li><a [routerLink]="['flash']">Flash</a></li>
   <li><a [routerLink]="['hulk']">Hulk</a></li>
 </ul>

  <router-outlet></router-outlet>
  `,
  styles: [`
  .selectedLink{
    background-color : crimson;
    color: papayawhip;
  }
  `]
})
export class AppComponent {
  title = 'step1-routing-fun';
  quantity= 0;
}
