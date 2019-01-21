import { Component, OnInit } from '@angular/core';
import * as ALSession from '@alertlogic/session';
import * as ALAims from '@alertlogic/aims';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 5 CLI - ES6 Compilation Test';
  private alSession = ALSession;
  private alAims = ALAims;

  constructor() {

  }

  ngOnInit() {
    console.log(this.alSession.getSession());
  }

  doStuff() {
      this.alAims.getAccountDetails('2').then((response) => {
        console.log(response);
      })
  }
}
