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

      if ( state.priceHistory.typeID === action.typeID ) {
        b.priceHistory.data = Object.assign({}, state.priceHistory.data);
      }
      b.priceHistory.data[action.regionID] = action.priceHistory;
      return b;
    }
    case a.MarketActions.AddMarketRegion: {
      const b = { ...state };
      b.regionList = Object.assign([], state.regionList);
      b.regionList.push(action.regionID);
      return b;
    }
    case a.MarketActions.RemoveMarketRegion: {
      const b = { ...state };
      b.regionList = Object.assign([], state.regionList).filter( r => r !== action.regionID );
      const i = b.regionList.indexOf(action.regionID);
      if ( i > -1) {
        b.regionList.splice(i, 1);
      }
      return b;
    }
    default: {
      // console.log('[WARNING] marketReducer(): No action for type:\n' + JSON.stringify(action));
      return state;
    }
  }
}

