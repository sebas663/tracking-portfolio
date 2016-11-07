import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { PortfolioService }     from './portfolio.service';
import { PortfolioComponent }   from './portfolio.component';
import { PortfolioDetailComponent }  from './portfolio-detail.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
	PortfolioRoutingModule
  ],
  declarations: [
    PortfolioDetailComponent,
    PortfolioComponent
  ],
  providers: [
    PortfolioService,
  ]
})
export class PortfolioModule {
}
