import './rxjs-extensions';
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
/* import { InputTextModule}       from 'primeng/primeng'; */

/* import { AppRoutingModule } from './app-routing.module'; */

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { routing }              from './app.routing';
import { PortfolioService }     from './service/portfolio.service';
import { AppComponent }         from './component/app.component';
import { DashboardComponent }   from './component/dashboard.component';
import { PortfolioComponent }   from './component/portfolio.component';
import { PortfolioDetailComponent }  from './component/portfolio-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService),
/*     AppRoutingModule, */
	routing
  ],
  declarations: [
    AppComponent,
	DashboardComponent,
    PortfolioDetailComponent,
    PortfolioComponent
  ],
  providers: [
    PortfolioService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
