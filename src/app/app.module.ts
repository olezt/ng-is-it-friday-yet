import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }         from './app.component';
import { FridayComponent }   from './friday.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    FridayComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
