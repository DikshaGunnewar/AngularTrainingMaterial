import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-grid',
  template: `
  {{this.heroVersion}}
     <table class="table table-hover table-info table-striped">
        <thead class="table-dark">
          <tr>
            <th>Sl #</th>
            <th>Title</th>
            <th>Full Name</th>
            <th>Poster</th>
            <th>City</th>
            <th>Ticket Price</th>
            <th>Release Date</th>
            <th>Movies</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let hero of heroes; index as idx; first as fst; last as lst">
            <td>{{ idx+1 }}</td>
            <td>{{ hero.title | uppercase | lowercase | titlecase }}</td>
            <td>
              <!-- <span *ngIf="fst"> First Hero</span>
              <span *ngIf="lst"> Last Hero</span> -->
              {{ hero.firstname + ' ' + hero.lastname |gen : hero.gender }}</td>
            <td>
              <img width="60px" [src]="hero.poster" alt="hero.title" />
            </td>

            <td>{{ hero.city }}</td>
            <td>{{ hero.ticketprice | currency: 'INR':'symbol':'3.2-4' }}</td>
            <td>{{ hero.releasedate | date: 'dd-MMMM-yyyy' }}</td>
            <td>
              <span *ngFor="let movie of hero.movieslist">
                  <img width="40" [src]="movie.poster" alt="movie.title" />
                  &nbsp;
                <!-- <span>{{movie.title}}></span> -->
              </span>
            </td>
          </tr>
        </tbody>
      </table>
  `,
  styles: [
  ]
})
export class GridComponent  {
  heroes: any;
  heroVersion:any;
  constructor(private hs: HeroService){
    this.heroes = this.hs.getHeroData();
    this.heroVersion = this.hs.getHeroVersion();
  }
};
