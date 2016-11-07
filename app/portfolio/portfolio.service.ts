import { Injectable }    from '@angular/core';
import { Headers,Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Portfolio } from '../model/portfolio';
@Injectable()
export class PortfolioService {
  /* REST */
  /* private portfolioUrl = 'http://localhost:8080/api/portfolio/portfolios'; */
  
  /* IN MEMORY DATA SERVICE */
  private headers = new Headers({'Content-Type': 'application/json'});
  private portfolioUrl = 'app/portfolios';// URL to web api
  
  constructor(private http: Http) { }
  
  getPortfolios(): Promise<Portfolio[]> {
    return this.http.get(this.portfolioUrl)
               .toPromise()
               .then(response => response.json().data as Portfolio[])		 
               .catch(this.handleError);
  }
  getPortfolio(_id: string): Promise<Portfolio> {
    return this.getPortfolios()
               .then(portfolios => portfolios.find(portfolio => portfolio._id === _id));
  }
  delete(_id: string): Promise<void> {
    let url = `${this.portfolioUrl}/${_id}`;
	//console.log("url " + url);
	/* return this.http.delete(url) */
	return this.http.delete(url, {headers: this.headers})
       .toPromise()
	   .then(() => null) 
       .catch(this.handleError);
  }
  create(name: string): Promise<Portfolio> {
	console.log("name " + name);
	console.log("name string " + JSON.stringify({name: name}));
    return this.http
      //.post(this.portfolioUrl, JSON.stringify({name: name}))
	  /* .post(this.portfolioUrl, {name: name}) */
	  .post(this.portfolioUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  update(portfolio: Portfolio): Promise<Portfolio> {
	//console.log("portfolio._id " + portfolio._id);
    const url = `${this.portfolioUrl}/${portfolio._id}`;
    return this.http
      /* .put(url, JSON.stringify(portfolio)) */
	  .put(url, JSON.stringify(portfolio),{headers: this.headers})
      .toPromise()
      .then(() => portfolio)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
