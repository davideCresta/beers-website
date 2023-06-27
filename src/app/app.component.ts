import { Component, OnInit } from '@angular/core';
import { BeerService} from './services/beer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title() {
    throw new Error('Method not implemented.');
  }

  beers: any;

  constructor(private beerService: BeerService){}

  ngOnInit() {
    this.loadBeers();
  }

  loadBeers() {
    this.beerService.getBeers()
      .subscribe(beers => {
        this.beers = beers;
      });
  }

  nextPage() {
    this.beerService.nextPage()
      .subscribe(beers => {
        this.beers = beers;
      });
  }

  previousPage() {
    this.beerService.previousPage()
      .subscribe(beers => {
        this.beers = beers;
      });
  }
}
