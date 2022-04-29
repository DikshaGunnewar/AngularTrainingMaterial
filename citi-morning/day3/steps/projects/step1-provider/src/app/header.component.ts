import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-header',
  template: `
   {{this.heroVersion}}
    <ul class="nav justify-content-center">
      <li class="nav-items" *ngFor="let hero of heroes">
        <a href="#" class="nav-link">{{ hero.title }}</a>
      </li>
    </ul>
  `,
  styles: [],
})
export class HeaderComponent {
  heroes: any;
  heroVersion:any;
  constructor(private hs: HeroService){
    this.heroes = this.hs.getHeroData();
    this.heroVersion = this.hs.getHeroVersion();
  }
}
