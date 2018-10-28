import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'snews-app';

  public options = {
    timeOut: 3000,
    lastOnBottom: true
  }

  constructor(){}

}
