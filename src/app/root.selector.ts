import { State } from './root.state';
import { Observable } from 'rxjs';
import { Item } from './item';
import { PriceHistory } from './price-history';



export function typeIDSelector(state: any): number {
  state = state.state as State;
  return state.typeID;
}

export function itemDetailsSelector(state: any): Item {
  state = state.state as State;
  return state.itemDetails;
}

export function priceHistorySelector(state: any): PriceHistory {
  state = state.state as State;
  return state.priceHistory;
}

export function regionListSelector(state: any): number[] {
  state = state.state as State;
  return state.regionList;
}
