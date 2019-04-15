import * as a from './root.actions';
import { State } from './root.state';
import { PriceHistory, PriceHistoryEntry } from './price-history';

export function marketReducer(
  state: State,
  action: a.MarketActionsUnion
): State {
  switch (action.type) {
    case a.MarketActions.AddPriceHistoryForRegion: {
      const b = { ...state };
      b.priceHistory = new PriceHistory();
      b.priceHistory.data[action.regionID] = action.priceHistory;
      console.log('MARKET: new state:\n' + JSON.stringify(b));
      return b;
    }
    default: {
      // console.log('[WARNING] marketReducer(): No action for type:\n' + JSON.stringify(action));
      return state;
    }
  }
}

