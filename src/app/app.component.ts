import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-converter';
  version = 'Angular version 10.0.8';
  icon="fa-balance-scale";

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
            switch(this.router.url){
              case '/distance':
                this.icon="fa-road";
                break;
              case '/volume' :
                this.icon="fa-beer";
                break;
              case '/speed' :
                this.icon="fa-clock";
                break;
              default:
                this.icon="fa-balance-scale";
                break;
            }
        }
      }
    );
  }
}
