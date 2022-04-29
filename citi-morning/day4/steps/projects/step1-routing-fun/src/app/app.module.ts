import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { WonderwomenComponent } from './wonderwomen.component';
import { AquamanComponent } from './aquaman.component';
import { NotfoundComponent } from './notfound.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BatmanComponent,
    SupermanComponent,
    WonderwomenComponent,
    AquamanComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: "", component:HomeComponent },
      { path: "batman", component:BatmanComponent },
      { path: "superman", component:SupermanComponent },
      { path: "wonderwomen", component:WonderwomenComponent },
      { path: "aquaman", component:AquamanComponent },
      { path: "aquaman/:qty", component:AquamanComponent },
      { path: "flash", redirectTo:"superman", pathMatch: "full"},
      { path: "**", component:NotfoundComponent }
    
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
