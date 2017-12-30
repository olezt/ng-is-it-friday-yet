import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }         from './app.component';
import { FridayComponent }   from './friday.component';

const routes: Routes = [
  { path: '', redirectTo: '/isitfridayyet', pathMatch: 'full' },
  { path: 'isitfridayyet',  component: FridayComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    FridayComponent
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
