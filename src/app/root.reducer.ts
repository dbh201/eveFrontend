import * as a from './appdata.actions';
import { Observable, Subject } from 'rxjs';

import { CargoType } from './cargotype';
import { Item } from './item';
import { State } from './appdata.state';
import { itemReducer } from './item.reducer';
import { marketReducer } from './market.reducer';
import { PriceHistory } from './price-history';


export const initialState: State = {
  typeID: 0,
  itemDetails: null,
  baseSolarSystem: 30005312,
  regionList: [10000068],
  cargoType: CargoType.Any,
  capacity: 0,
  maxJumps: 0,
  lowSec: false,
  priceHistory: new PriceHistory()
};

export function rootReducer(
  state = initialState,
  action: a.ActionsUnion
): State {
  console.log('ACTION: ' + JSON.stringify(action));
  switch (action.category) {
    case a.ActionCategories.Item: {
      return itemReducer(state, action);
    }
    case a.ActionCategories.Market: {
      return marketReducer(state, action);
    }
    default: {
      // console.log('[WARNING] rootReducer(): No action for type:\n' + JSON.stringify(action) );
      return state;
    }
  }
}
