import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {

  private URL = 'https://api.openbrewerydb.org/v1/breweries';

  constructor(public httpClient: HttpClient) {

  }

  getPosts(){
    return this.httpClient.get(this.URL);
  }
}
