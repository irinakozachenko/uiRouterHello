
import { UIRouter } from "@uirouter/core";
import { Injector, Injectable } from "@angular/core";
import { PeopleService } from "./people.service";

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const peopleService = injector.get(PeopleService);

  // If the browser URL doesn't matches any state when the router starts,
  // go to the `hello` state by default
  router.urlService.rules.initial({ state: "hello" });


}
