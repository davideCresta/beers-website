import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from './services/beer-service.service';
import { BeersModel } from './model/beer';
import { BeersComponent } from './beers/beers.component';
import { HttpClient } from '@angular/common/http';


  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title(title: any) {
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
