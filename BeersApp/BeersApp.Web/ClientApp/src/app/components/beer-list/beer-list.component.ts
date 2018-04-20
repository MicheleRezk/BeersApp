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
  //Defaults
  currentPageNumber: number = 1;
  currentAvailableId: number = -1;
  currentAvailableName: string = "All";

  errorMessage: string;
  isLoading: boolean;
  filters: Available[];

  constructor(private _beerService: BeerService, private _config: Config) {

  }

  ngOnInit(): void {
    this.filters = this._config.AVAILABLE_FILTERS;
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
  loadBeers(): void{
    this.isLoading = true;
    this._beerService.getBeers(this.currentPageNumber, this.currentAvailableId).subscribe(
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
