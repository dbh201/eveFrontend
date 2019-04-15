import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, withLatestFrom, map, tap } from 'rxjs/operators';
import { StaticDataService } from './static-data.service';
import { ItemActions, RequestItemDetails, RequestIconURLForItem, SyncItem } from './root.actions';
import { Item } from './item';

@Injectable()

export class StaticDataEffects {

  constructor(
    private sds: StaticDataService,
    private actions$: Actions ) {}

  @Effect()
  itemDetailsEffect$ = this.actions$.pipe(
    ofType( ItemActions.RequestItemDetails ),
    switchMap( (a: RequestItemDetails) => this.sds.getItemDetails(a.typeID)
      .pipe(
        map( (b: Item) => new RequestIconURLForItem(b) )
      )
    )
  );

  @Effect()
  itemIconEffect$ = this.actions$.pipe(
    ofType( ItemActions.RequestIconURLForItem ),
    switchMap( (a: RequestIconURLForItem) => this.sds.populateIconURLProperty(a.item)
      .pipe(
        map( (b: Item) => new SyncItem(b) )
      )
    )
  );
}
