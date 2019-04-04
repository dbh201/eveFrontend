import * as a from './appdata.actions';
import { Observable, Subject } from 'rxjs';
import { CargoType } from './cargotype';
import { Item } from './item';
import { State } from './appdata.state';
import { itemReducer } from './item.reducer';
import { marketReducer } from './market.reducer';


export const initialState: State = {
  typeID: 0,
  item: null,
  baseSolarSystem: 30005312,
  allowedRegions: [10000068],
  cargoType: CargoType.Any,
  capacity: 0,
  maxJumps: 0,
  lowSec: false,
  priceData: null
};

export function rootReducer(
  state = initialState,
  action: a.ActionsUnion
): State {
  switch (action.category) {
    case a.ActionCategories.Item: {
      return itemReducer(state, action);
    }
    case a.ActionCategories.Market: {
      return marketReducer(state, action);
    }
    default: {
      console.log('[WARNING] rootReducer(): No action for type:\n' + JSON.stringify(action) );
      console.log('( this can likely be ignored )');
      return state;
    }
  }
}
