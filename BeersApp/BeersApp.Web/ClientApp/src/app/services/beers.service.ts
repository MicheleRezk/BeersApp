import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import { Config } from './config.service';
import { BeerListResponseWrapper } from '../models/beer-list-response-wrapper.model';
import { BeerDetailsResponseWrapper } from '../models/beer-details-response-wrapper.model';

@Injectable()
export class BeerService {

  constructor(private _http: HttpClient, private _config: Config) { }

  getBeers(pageNumber: number, availableId: number, order: string, sort: string): Observable<BeerListResponseWrapper> {
    
    // Initialize Params Object
    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('availableId', availableId.toString())
      .set('order', order)
      .set('sort', sort);


    return this._http.get<BeerListResponseWrapper>(this._config.BACKEND.BEERS.LIST, { params })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getBeerDetails(beerId: string): Observable<BeerDetailsResponseWrapper> {
    // Initialize Params Object
    let params = new HttpParams()
      .set('beerId', beerId);

    return this._http.get<BeerDetailsResponseWrapper>(this._config.BACKEND.BEERS.DETAILS, { params })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  searchForBeers(keyword: string, pageNumber: number): Observable<BeerListResponseWrapper> {

    // Initialize Params Object
    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('keyword', keyword);
      
    return this._http.get<BeerListResponseWrapper>(this._config.BACKEND.BEERS.SEARCH, { params })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
