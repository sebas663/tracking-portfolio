import './rxjs-extensions';
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
/* import { InputTextModule}       from 'primeng/primeng'; */


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent }         from './app.component';
import { DashboardComponent }      from './dashboard/dashboard.component';
import { PortfolioModule }      from './portfolio/portfolio.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	InMemoryWebApiModule.forRoot(InMemoryDataService),
	PortfolioModule,
	AppRoutingModule
  ],
  declarations: [
    AppComponent,
	DashboardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
