import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, merge, empty } from 'rxjs';
import { map, reduce, switchMap, tap, catchError } from 'rxjs/operators';
import { PriceHistoryEntry } from './price-history';

const ESI_URL = 'https://esi.evetech.net/latest/';

@Injectable({
  providedIn: 'root'
})
export class ESIService {

  constructor(private http: HttpClient) { }

  getPriceHistoryForRegion(typeID: number, regionID: number): Observable<PriceHistoryEntry[]> {
    return this.http.get(ESI_URL + 'markets/' + regionID + '/history/?type_id=' + typeID)
    .pipe(
      switchMap( i => Object.values(i) ),
      catchError( (error) => this.handleError(error)),
      reduce( (j: PriceHistoryEntry[], k: any) => {
        j.push({ ...k, orderCount: k.order_count} as PriceHistoryEntry);
        return j;
      }, (new Array<PriceHistoryEntry>()))
    );
  }
  handleError(error) {
    console.log('ESI had an error:\n' + error);
    return empty();
  }
}
