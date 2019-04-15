import * as a from './root.actions';
import { State } from './root.state';

export function itemReducer(
  state: State,
  action: a.ItemActionsUnion
): State {
  switch (action.type) {
    case a.ItemActions.SetItem: {
      return {...state, typeID: action.typeID };
    }
    case a.ItemActions.SyncItem: {
      return { ...state, itemDetails: action.item };
    }
    default: {
      // console.log('[WARNING] itemReducer(): No action for type:\n' + JSON.stringify(action));
      return state;
    }
  }
}
