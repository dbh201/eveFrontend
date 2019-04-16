import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { switchMap, toArray, map, tap, withLatestFrom } from 'rxjs/operators';

import { State } from './root.state';
import { MarketActions,
  RequestAddMarketRegion,
  RequestRemoveMarketRegion,
  AddMarketRegion,
  RemoveMarketRegion,
  RegionListChanged } from './root.actions';
import { regionListSelector } from './root.selector';

@Injectable()

export class MarketEffects {

  constructor(
    private store: Store<State>,
    private actions$: Actions ) {}

  // TODO: What if the region doesn't exist? Should have error checking.
  // Don't fire RegionListChanged until we know it actually changed.
  @Effect()
  addMarketRegionEffect = this.actions$.pipe(
    ofType( MarketActions.RequestAddMarketRegion ),
    map( (a: RequestAddMarketRegion) => [new AddMarketRegion(a.regionID), new RegionListChanged()] ),
  );

  // TODO: What if the region wasn't in the list? Same as above.
  @Effect()
  rmMarketRegionEffect = this.actions$.pipe(
    ofType( MarketActions.RequestRemoveMarketRegion ),
    map( (a: RequestRemoveMarketRegion) => [new RemoveMarketRegion(a.regionID), new RegionListChanged()] ),
  );
}
