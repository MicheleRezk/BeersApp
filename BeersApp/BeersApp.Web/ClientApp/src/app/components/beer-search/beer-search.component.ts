import { Component, OnInit } from '@angular/core';

//Models
import { Beer } from '../../models/beer.model';
import { BeerListResponseWrapper } from '../../models/beer-list-response-wrapper.model';

//Services
import { BeerService } from '../../services/beers.service';


@Component({
  selector: 'beer-search',
  templateUrl: './beer-search.component.html',
})
export class BeerSearchComponent implements OnInit{
  // #region Properties
  // lists:
  beers: Beer[];

  // objects:
  beerListResponse: BeerListResponseWrapper;
  //beer list settings
  currentPageNumber: number = 1;
  keyword: string = "";
  errorMessage: string;
  isLoading: boolean;
 
  constructor(private _beerService: BeerService) {

  }

  ngOnInit(): void {
    
  }

  //when press enter, or press Go To Page Button
  goToPage($event): void {
    this.searchBeers();
  }

  //Beers Listing
  searchBeers(): void{
    if (this.keyword == "")//alert user to enter keyword for search
    {
      alert("Please enter keyword first");
      return;
    }
    this.isLoading = true;
    this._beerService.searchForBeers(this.keyword, this.currentPageNumber).subscribe(
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
