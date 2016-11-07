import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let portfolios = [
      {id_: '11', name: 'Mr. Nice'},
      {id_: '12', name: 'Narco'}
    ];
    return {portfolios};
  }
}
