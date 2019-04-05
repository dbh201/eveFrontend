import { State } from './appdata.state';
import { Observable } from 'rxjs';
import { Item } from './item';
import { PriceData } from './pricedata';
export function typeIDSelector(state: any): number {
  state = state.state as State;
  return state.typeID;
}
export function itemDetailsSelector(state: any): Item {
  state = state.state as State;
  return state.itemDetails;
}
export function priceDataSelector(state: any): PriceData[] {
  state = state.state as State;
  return state.priceData;
}
