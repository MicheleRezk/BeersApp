import { Component, OnInit } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { BeerService } from '../../services/beers.service';
import { BeerListResponseWrapper } from '../../models/beer-list-response-wrapper.model';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
})
export class BeerListComponent implements OnInit{
  // #region Properties
  // lists:
  beers: Beer[];

  // objects:
  beerListResponse: BeerListResponseWrapper;
  currentPageNumber: number = 1;
  errorMessage: string;
  isLoading: boolean;

  constructor(private _beerService: BeerService) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    this._beerService.getBeers().subscribe(
      response => this.displayBeerList(response),
      error => this.errorMessage = <any>error,
        () => this.isLoading = false
    );
  }
  displayBeerList(response: BeerListResponseWrapper): void {
    this.beerListResponse = response;
    if (this.beerListResponse.status == "success") {
      this.beers = this.beerListResponse.data;
      this.currentPageNumber = this.beerListResponse.currentPage;
    }
  }
}
