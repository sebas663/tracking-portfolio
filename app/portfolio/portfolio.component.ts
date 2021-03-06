import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Portfolio }         from '../model/portfolio';
import { PortfolioService }  from './portfolio.service';

@Component({
  moduleId: module.id,
  selector: 'my-portfolio',
  templateUrl: 'portfolio.component.html',
  styleUrls: ['portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios: Portfolio[];
  selectedPortfolio: Portfolio;
  constructor(
    private portfolioService: PortfolioService,
    private router: Router) { }
  getPortfolios(): void {
    this.portfolioService
        .getPortfolios()
        .then(portfolios => this.portfolios = portfolios);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.portfolioService.create(name)
      .then(portfolio => {
        this.portfolios.push(portfolio);
        this.selectedPortfolio = null;
      });
  }
  delete(portfolio: Portfolio): void {
	console.log("portfolio._id " + portfolio._id);
	console.log("portfolio.name " + portfolio.name);
    this.portfolioService
        .delete(portfolio._id)
        .then(() => {
          this.portfolios = this.portfolios.filter(h => h !== portfolio);
          if (this.selectedPortfolio === portfolio) { this.selectedPortfolio = null; }
        });
  }
  ngOnInit(): void {
    this.getPortfolios();
  }
  onSelect(portfolio: Portfolio): void {
    this.selectedPortfolio = portfolio;
	console.log(JSON.stringify(this.selectedPortfolio));
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPortfolio._id]);
  }
}
