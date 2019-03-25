import { State } from './appdata.reducer';
import { Observable } from 'rxjs';
import { Item } from './item';
export function typeIDSelector(state: State): number {
  console.log(JSON.stringify(state));
  return state.state.typeID;
}
export function itemSelector(state: State): Item {
  return state.item;
}
