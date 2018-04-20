import { Injectable, Inject } from '@angular/core';

@Injectable()
export class Config {
  public readonly BACKEND: any = {
    BEERS: {
      LIST: "/api/beers/list",
      DETAILS:"/api/beers/details-by-id"
    }
  };
}
