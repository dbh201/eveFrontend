import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MarketActions } from './appdata.actions';
import { PriceData } from './pricedata';

const ESI_URL = 'https://esi.evetech.net/latest/';

@Injectable({
  providedIn: 'root'
})
export class ESIService {

  constructor(private http: HttpClient, private actions$: Actions) { }

  getPriceHistory(typeID: number, regionID: number): Observable<PriceData[]> {
    return this.http.get(ESI_URL + 'markets/' + regionID + 'history/?type_id=' + typeID)
      .pipe(
        map( (i) => {
          // 'a is never redefined blah blah blah', whatever. here.
          let a = null;
          a = new Array<PriceData>();
          for (const j of Array<any>(i)) {
            a.push( {
              ...j, orderCount:  j.order_count
            } as PriceData);
          }
          return a;
        })
      );
  }
}
