/*Client App Configuration Settings*/
/*Contains Settings like Backend Services Urls*/

import { Injectable, Inject } from '@angular/core';
import { Available } from '../models/available.model';

@Injectable()
export class Config {
  
  public readonly BACKEND: any = {
    BEERS: {
      LIST: "/api/beers/list",
      DETAILS: "/api/beers/details-by-id",
      SEARCH:"/api/beers/search"
    }
  };
  public AVAILABLE_FILTERS: Available[] = [];
  public ORDER_BY_OPTIONS: string[] = ["name", "abv"];

  constructor() {
    //fill available Filters
    this.fillFilters();
  }
  fillFilters(): void
  {
    this.AVAILABLE_FILTERS.push(new Available("-1", "All", "All"));
    this.AVAILABLE_FILTERS.push(new Available("1", "Year Round", "Year Round"));
    this.AVAILABLE_FILTERS.push(new Available("2", "Limited", "Limited"));
    this.AVAILABLE_FILTERS.push(new Available("4", "Seasonal", "Seasonal"));
    this.AVAILABLE_FILTERS.push(new Available("5", "Spring", "Spring"));
    this.AVAILABLE_FILTERS.push(new Available("6", "Summer", "Summer"));
    this.AVAILABLE_FILTERS.push(new Available("8", "Winter", "Winter"));
  }
}
