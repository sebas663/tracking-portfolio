import { Component, OnInit } from '@angular/core';

import { Portfolio } from '../model/portfolio';
import { PortfolioService }  from '../portfolio/portfolio.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  portfolios: Portfolio[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolios()
      .then(portfolios => this.portfolios = portfolios.slice(0, 5));
  }

  gotoDetail(portfolio: Portfolio): void { /* not implemented yet */}
}

