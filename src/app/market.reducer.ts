import * as a from './appdata.actions';
import { State } from './appdata.state';

export function marketReducer(
  state: any,
  action: a.MarketActionsUnion
): State {
  switch (action.action) {
    case a.MarketActions.RequestPriceHistory: {
      console.log('TBI:Price history requested for item id: ' + state.state.typeID);
      return state;
    }
    default: {
      console.log('TBI: No action for action type: ' + action.action);
      return state;
    }
  }
}

