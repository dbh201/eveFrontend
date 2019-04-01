import * as a from './appdata.actions';
import { State } from './appdata.state';

export function itemReducer(
  state: State,
  action: a.ItemActionsUnion
): State {
  switch (action.action) {
    case a.ItemActions.SetItem: {
      return {...state, typeID: action.typeID };
    }
    case a.ItemActions.SyncItem: {
      return { ...state, item: action.item };
    }
  }
}
