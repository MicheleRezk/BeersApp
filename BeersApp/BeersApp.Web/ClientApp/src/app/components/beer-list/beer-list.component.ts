import { Component, OnInit } from '@angular/core';

//Models
import { Beer } from '../../models/beer.model';
import { BeerListResponseWrapper } from '../../models/beer-list-response-wrapper.model';
import { Available } from '../../models/available.model';

//Services
import { Config } from '../../services/config.service';
import { BeerService } from '../../services/beers.service';


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
  //beer list settings
  currentPageNumber: number = 1;
  currentAvailableId: number = -1;
  currentAvailableName: string = "All";
  currentOrderBy: string = "name";
  currentSort: string = "asc";

  errorMessage: string;
  isLoading: boolean;
  filters: Available[];
  orderByOptions: string[];

  constructor(private _beerService: BeerService, private _config: Config) {

  }

  ngOnInit(): void {
    this.filters = this._config.AVAILABLE_FILTERS;
    this.orderByOptions = this._config.ORDER_BY_OPTIONS;
    this.loadBeers();
  }

  //when press enter, or press Go To Page Button
  goToPage($event): void {
    this.loadBeers();
  }
  //filter by available Id
  filterByAvailableId(availableId: number) {
    this.currentAvailableId = availableId;
    this.currentAvailableName = this.filters.find(f => f.id == this.currentAvailableId.toString()).name;
    this.loadBeers();
  }
  //Change order by of listing beers (and reverse sort direction)
  changeOrderBy(orderBy: string) {
    this.currentOrderBy = orderBy;
    if (this.currentSort == "asc") {
      this.currentSort = "desc";
    }
    else {
      this.currentSort = "asc";
    }
    this.loadBeers();
  }
  //Beers Listing
  loadBeers(): void{
    this.isLoading = true;
    this._beerService.getBeers(this.currentPageNumber, this.currentAvailableId, this.currentOrderBy, this.currentSort).subscribe(
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
