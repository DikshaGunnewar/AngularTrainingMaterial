import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

//Egar loading
// imports: [ BrowserModule, RouterModule.forRoot([
//   { path:"**", component: WelcomeComponent }
// ]), HeroModule, MovieModule ], 

@NgModule({
  declarations: [ AppComponent, WelcomeComponent ],
imports: [ BrowserModule, RouterModule.forRoot([
  { path:"hero", loadChildren:()=> import('./hero.module').then(mod=>mod.HeroModule) },
  { path:"movie", loadChildren:()=> import('./movie.module').then(mod=>mod.MovieModule)},
  { path:"**", component: WelcomeComponent }
])], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
