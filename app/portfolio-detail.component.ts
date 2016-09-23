import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Portfolio }        from './portfolio';
import { PortfolioService }     from './portfolio.service';
@Component({
  selector: 'my-portfolio-detail',
  templateUrl: 'app/resources/html/portfolio-detail.component.html',
  styleUrls: ['app/resources/css/portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  portfolio: Portfolio;
  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let _id = params['_id'];
      this.portfolioService.getPortfolio(_id)
        .then(portfolio => this.portfolio = portfolio);
    });
  }
  save(): void {
    this.portfolioService.update(this.portfolio)
      .then(this.goBack);
  }
  goBack(): void {
    window.history.back();
  }
}
