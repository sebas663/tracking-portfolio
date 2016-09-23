import './rxjs-extensions';
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';
import { AppComponent }         from './app.component';
import { InputTextModule}       from 'primeng/primeng';
import { routing }              from './app.routing';
import { DashboardComponent }   from './dashboard.component';
import { PortfolioService }     from './portfolio.service';
import { PortfolioComponent }   from './portfolio.component';
import { PortfolioDetailComponent }  from './portfolio-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent
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
