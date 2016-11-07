import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Portfolio }              from '../model/portfolio';
import { PortfolioService }       from './portfolio.service';
@Component({
  moduleId: module.id,
  selector: 'my-portfolio-detail',
  templateUrl: 'portfolio-detail.component.html',
  styleUrls: ['portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  portfolio: Portfolio;
  constructor(
    private portfolioService: PortfolioService,
    private route: ActivatedRoute,
	private location: Location
	){}
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
