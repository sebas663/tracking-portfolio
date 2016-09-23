import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';
@Injectable()
export class HeroService {
	
  private heroesUrl = 'http://localhost:8080/api/hero/heroes';
  
  constructor(private http: Http) { }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json() as Hero[])		 
               .catch(this.handleError);
  }
  getHero(_id: string): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero._id === _id));
  }
  delete(_id: string): Promise<void> {
    let url = `${this.heroesUrl}/${_id}`;
	//console.log("url " + url);
	return this.http.delete(url)
       .toPromise()
	   .then(() => null) 
       .catch(this.handleError);
  }
  create(name: string): Promise<Hero> {
	//console.log("name " + name);
	//console.log("name string " + JSON.stringify({name: name}));
    return this.http
      //.post(this.heroesUrl, JSON.stringify({name: name}))
	  .post(this.heroesUrl, {name: name})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  update(hero: Hero): Promise<Hero> {
	//console.log("hero._id " + hero._id);
    const url = `${this.heroesUrl}/${hero._id}`;
    return this.http
      .put(url, JSON.stringify(hero))
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
