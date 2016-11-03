import { Component, OnInit } from '@angular/core';

import { Portfolio } from '../model/portfolio';
import { PortfolioService }  from '../service/portfolio.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'app/resources/html/dashboard.component.html',
  styleUrls: ['app/resources/css/dashboard.component.css']
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

