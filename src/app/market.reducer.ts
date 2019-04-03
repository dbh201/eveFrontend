import * as a from './appdata.actions';
import { State } from './appdata.state';

export function marketReducer(
  state: State,
  action: a.MarketActionsUnion
): State {
  console.log(JSON.stringify(state));
  switch (action.action) {
    case a.MarketActions.RequestPriceHistory: {
      return state;
    }
    default: {
      console.log('[WARNING] marketReducer(): No action for type:\n' + JSON.stringify(action));
      return state;
    }
  }
}

