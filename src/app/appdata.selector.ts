import { State } from './appdata.state';
import { Observable } from 'rxjs';
import { Item } from './item';
export function typeIDSelector(state: State): number {
  console.log(JSON.stringify(state));
  console.log(state.typeID);
  return state.typeID;
}
export function itemSelector(state: State): Item {
  return state.item;
}
