import * as a from './appdata.actions';
import { Observable, Subject } from 'rxjs';
import { CargoType } from './cargotype';
import { Item } from './item';
import { State } from './appdata.state';
import { itemReducer } from './item.reducer';


export const initialState: State = {
  typeID: 0,
  item: null,
  baseSolarSystem: 30005312,
  allowedRegions: [10000068],
  cargoType: CargoType.Any,
  capacity: 0,
  maxJumps: 0,
  lowSec: false
};

export function rootReducer(
  state = initialState,
  action: a.ActionsUnion
): State {
  switch (action.type) {
    case a.ActionType.Item: {
      return itemReducer(state, action);
    }
    default: {
      return state;
    }
  }
}
