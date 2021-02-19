import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UIRouterModule} from "@uirouter/angular";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { PeopleService } from './people.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    PeopleComponent,
    PersonComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [{ provide: PeopleService, useClass: PeopleService }],

  bootstrap: [AppComponent]
})
export class AppModule { }
