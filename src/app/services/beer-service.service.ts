import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private apiUrl = 'https://api.openbrewerydb.org/v1/breweries';
  private currentPage = 1;
  private pageSize = 3;

  constructor(private httpClient: HttpClient) { }

  getBeers(): Observable<any> {
    const url = `${this.apiUrl}?page=${this.currentPage}&per_page=${this.pageSize}`;
    return this.httpClient.get(url);
  }

  nextPage() {
    this.currentPage++;
    return this.getBeers();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    return this.getBeers();
  }
}
