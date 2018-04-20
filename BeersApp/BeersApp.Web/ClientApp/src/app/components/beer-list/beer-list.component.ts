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
  imageWidth: number = 200;
  imageMargin: number = 2;

  constructor(private _beerService: BeerService) {

  }

  ngOnInit(): void {
    this._beerService.getBeers().subscribe(response => {
      this.beerListResponse = response;
      if (this.beerListResponse.status == "success") {
        this.beers = this.beerListResponse.data;
        this.currentPageNumber = this.beerListResponse.currentPage;
      }
    },
      error => this.errorMessage = <any>error)
  }
}
