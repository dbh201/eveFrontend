import * as a from './appdata.actions';
import { Observable, Subject } from 'rxjs';
import { CargoType } from './cargotype';
import { Item } from './item';

export interface State {
  typeID: number;
  item: Item;
  baseSolarSystem: number;
  allowedRegions: number[];
  cargoType: CargoType;
  capacity: number;
  maxJumps: number;
  lowSec: boolean;
}

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
  console.log(action.type);
  switch (action.type) {
    case a.Actions.SetItem: {
      console.log('Dispatched new typeID: ' + action.typeID);
      console.log(JSON.stringify({ ...state, item: action.item}));
      return {...state, typeID: action.typeID };
    }
    case a.Actions.SyncItem: {
      console.log('Dispatched new Item: ' + action.item.typeName);
      console.log(JSON.stringify({ ...state, item: action.item}));
      return { ...state, item: action.item };
    }
    default: {
      return state;
    }
  }
}
