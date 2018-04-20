import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import { Config } from './config.service';
import { BeerListResponseWrapper } from '../models/beer-list-response-wrapper.model';

@Injectable()
export class BeerService {

  constructor(private _http: HttpClient, private _config: Config) { }

  getBeers(): Observable<BeerListResponseWrapper> {
    return this._http.get<BeerListResponseWrapper>(this._config.BACKEND.BEERS.LIST)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
