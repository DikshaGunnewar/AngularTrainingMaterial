import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  template: `
  <h1>{{ apptitle }}</h1>
  <h2>{{ appversion }}</h2>
     <table>
       <thead>
         <tr>
           <th>Sl #</th>
           <th>Title</th>
           <th>Full Name</th>
           <th>More Detail</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let hero of heroeslist">
           <td>{{ hero?.id }}</td>
           <td>{{ hero?.name }}</td>
           <td>{{ hero?.biography['full-name'] }}</td>
           <td>
             <a [routerLink]="['/hero', hero.id]">Click For Detail</a>
           </td>
         </tr>
       </tbody>
     </table>
  `,
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  heroeslist:any;
  apptitle:any;
  appversion:any;
  constructor( private ar:ActivatedRoute ) { }

  ngOnInit(): void {
    // this.heroeslist = this.hs.getHeroes();
    // this.apptitle = this.ar.data['apptitle'];
    this.ar.data.subscribe( res => {
      this.apptitle = res['apptitle'];
      this.heroeslist = res['herodata'];
    })
  }

}
