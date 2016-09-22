import { Component }          from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/portfolio" routerLinkActive="active">Mi Cartera</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['.app/resources/css/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
