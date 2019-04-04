import { Action } from '@ngrx/store';
import { Item } from './item';

export enum ActionCategories {
  Item    = '[Global] Item Action',
  Market  = '[Global] Market Data Action',
}
export enum MarketActions {
  RequestPriceHistory = '[Market] Request price history for globally selected item',
  AddMarketRegion = '[Market] Add region to relevant market regions list',
  RemoveMarketRegion = '[Market] Remove region from relevant market regions list',
  ClearMarketRegions = '[Market] Remove all regions from relevant market regions list',
}

export enum ItemActions {
  SetItem   = '[Item] Set globally selected item',
  SyncItem  = '[Item] Sync item details in global ngrx store',
  RequestItemDetails = '[Item] Request item details from external API',
}
export class RequestItemDetails implements Action {
  readonly category = ActionCategories.Item ;
  readonly type = ItemActions.RequestItemDetails ;
  constructor(public typeID: number) {}
}

export class SetItem implements Action {
  readonly category = ActionCategories.Item ;
  readonly type = ItemActions.SetItem ;
  constructor(public typeID: number) {}
}
export class SyncItem implements Action {
  readonly category = ActionCategories.Item ;
  readonly type = ItemActions.SyncItem ;
  constructor(public item: Item) {}
}


export class RequestPriceHistory implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.RequestPriceHistory ;
}
export class AddMarketRegion implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.AddMarketRegion ;
  constructor(public regionID: number) {}
}
export class RemoveMarketRegion implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.RemoveMarketRegion ;
  constructor(public regionID: number) {}
}
export class ClearMarketRegions implements Action {
  readonly category = ActionCategories.Market ;
  readonly type = MarketActions.ClearMarketRegions ;
}


export type ActionsUnion = ItemActionsUnion | MarketActionsUnion;

export type ItemActionsUnion = SetItem | SyncItem;
export type MarketActionsUnion = RequestPriceHistory |
  AddMarketRegion | RemoveMarketRegion | ClearMarketRegions;
