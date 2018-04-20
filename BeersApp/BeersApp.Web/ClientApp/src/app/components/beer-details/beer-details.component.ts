import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Beer } from '../../models/beer.model';
import { BeerService } from '../../services/beers.service';
import { BeerDetailsResponseWrapper } from '../../models/beer-details-response-wrapper.model';



@Component({
  templateUrl: './beer-details.component.html',
})
export class BeerDetailsComponent implements OnInit{
  // #region Properties
  // objects:
  beerDetailsResponse: BeerDetailsResponseWrapper;
  beerId: string;
  beer: Beer
  errorMessage: string;

  //flags
  isLoading: boolean

  constructor(
    private _beerService: BeerService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.beerId = this._route.snapshot.paramMap.get('beerId');
    this._beerService.getBeerDetails(this.beerId).subscribe(
      response => this.displayBeerDetails(response),
      error => this.errorMessage = <any>error,
      () => this.isLoading = false
    );
  }

  displayBeerDetails(response: BeerDetailsResponseWrapper): void{
    if (response.status == "success") {
      this.beer = response.data;
    }
  }
}
