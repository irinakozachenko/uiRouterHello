import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {
    console.log("PeopleService constructor");
  }


  getAll() {
    return this.http.get<any[]>("/assets/people.json").toPromise();
  }

  get(id) {
    function personMatchesParam(person) {
      return person.id === id;
    }

    return this.getAll().then(people => people.find(personMatchesParam));
  }
}
