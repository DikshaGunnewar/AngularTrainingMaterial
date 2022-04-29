import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitiDirective } from './citi.directive';
import { CitiModule } from './citi.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, CitiModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
