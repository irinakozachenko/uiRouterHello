import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { PeopleService } from './people.service';
import { PeopleComponent } from './people/people.component';
import { Transition } from '@uirouter/angular';
import { PersonComponent } from './person/person.component';


/** States */
export const helloState = { name: "hello", url: "/hello", component: HelloComponent };

export const aboutState = { name: "about", url: "/about", component: AboutComponent };

export const peopleState = {
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

export const personState = {
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
