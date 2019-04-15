import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { switchMap, toArray, map, tap, withLatestFrom } from 'rxjs/operators';

import { State } from './root.state';
import { ESIService } from './esi.service';
import { MarketActions,
  AddPriceHistoryForRegion,
  RequestPriceHistory,
  RequestPriceHistoryForRegion } from './root.actions';
import { PriceHistory, PriceHistoryEntry } from './price-history';
import { regionListSelector } from './root.selector';

@Injectable()

export class ESIEffects {

  constructor(
    private esi: ESIService,
    private store: Store<State>,
    private actions$: Actions ) {}

  @Effect()
  priceHistoryEffect = this.actions$.pipe(
    ofType( MarketActions.RequestPriceHistory ),
    tap( a => 'PHE: received request: ' + JSON.stringify(a)),
    map( (a: RequestPriceHistory) => a.typeID ),
    withLatestFrom(this.store.select(regionListSelector)),
    switchMap( ( [a, b] ) => from(b).pipe(
      map( (c) => new RequestPriceHistoryForRegion(a, c) )
      )
    )
  );

  @Effect()
  priceHistoryForRegionEffect = this.actions$.pipe(
    ofType( MarketActions.RequestPriceHistoryForRegion ),
    switchMap( (a: RequestPriceHistoryForRegion) =>
      this.esi.getPriceHistoryForRegion(a.typeID, a.regionID).pipe(
        map( b => [b, a.regionID] ),
      )
    ),
    map( a => new AddPriceHistoryForRegion(a[0] as PriceHistoryEntry[], a[1] as number ) )
  );
}
