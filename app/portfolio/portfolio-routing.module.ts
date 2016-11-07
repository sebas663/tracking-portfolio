import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortfolioComponent }    from './portfolio.component';
import { PortfolioDetailComponent }  from './portfolio-detail.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'portfolio',  component: PortfolioComponent },
      { path: 'portfolio/:id', component: PortfolioDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioRoutingModule { }
