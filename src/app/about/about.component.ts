import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {

  greeting = "hello";
  toggleGreeting() {
    this.greeting = this.greeting === "hello" ? "whats up" : "hello";
  }

}
