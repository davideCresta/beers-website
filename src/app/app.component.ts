import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from './services/beer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title() {
    throw new Error('Method not implemented.');
  }
  beers: any = [];

  constructor(public beerService: BeerServiceService){}
  ngOnInit(){
    this.beerService.getPosts().subscribe({
      next: beers => this.beers = beers,
    })
  }
}
