import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Transition } from '@uirouter/angular';
import { PeopleService } from './people.service';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import {UIRouterModule} from "@uirouter/angular";
import { uiRouterConfigFn } from './router.config';

const helloState = { name: "hello", url: "/hello", component: HelloComponent };

const aboutState = { name: "about", url: "/about", component: AboutComponent };

const peopleState = {
  name: "people",
  url: "/people",
  component: PeopleComponent,
  resolve: [
    {
      token: "people",
      deps: [PeopleService],
      resolveFn: (peopleService: PeopleService) => peopleService.getAll()
    }
  ]
};

const personState = {
  name: "person",
  url: "/people/:personId",
  component: PersonComponent,
  resolve: [
    {
      token: "person",
      deps: [Transition, PeopleService],
      resolveFn: (trans: Transition, peopleService: PeopleService) =>
        peopleService.get(trans.params().personId)
    }
  ]
};

const INITIAL_STATES = [helloState, aboutState, peopleState, personState];

@NgModule({
  imports: [ UIRouterModule.forRoot({
    states: INITIAL_STATES,
    useHash: false,
    config: uiRouterConfigFn
  })],

  exports: [
    UIRouterModule
  ]
})
export class AppRoutingModule { }
