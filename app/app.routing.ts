import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* import { PortfolioComponent }      from './component/portfolio.component'; */
/* import { DashboardComponent }   from './dashboard.component'; */

const appRoutes: Routes = [
  /* {
	path: '',
	redirectTo: '/portfolio',
	pathMatch: 'full'
  }, */
 /*  {
    path: 'dashboard',
    component: DashboardComponent
  }, */
  /* {
    path: 'portfolio',
    component: PortfolioComponent
  } */
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
