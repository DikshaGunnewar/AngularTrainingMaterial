import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GenPipe } from './gen.pipe';
import { HeaderComponent } from './header.component';
import { GridComponent } from './grid.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent, GenPipe, HeaderComponent, GridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
