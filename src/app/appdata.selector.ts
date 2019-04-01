import { State } from './appdata.state';
import { Observable } from 'rxjs';
import { Item } from './item';
export function typeIDSelector(state: any): number {
  state = state.state as State;
  return state.typeID;
}
export function itemSelector(state: any): Item {
  state = state.state as State;
  return state.item;
}
