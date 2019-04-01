import { Action } from '@ngrx/store';
import { Item } from './item';

export enum ActionType {
  Item = '[Global] Item Action',
}

export enum ItemActions {
  SetItem = '[Global] Set selected item',
  SyncItem = '[Global] Sync item details',
}
export class SetItem implements Action {
  readonly type = ActionType.Item ;
  readonly action = ItemActions.SetItem ;
  constructor(public typeID: number) {}
}
export class SyncItem implements Action {
  readonly type = ActionType.Item ;
  readonly action = ItemActions.SyncItem ;
  constructor(public item: Item) {}
}
export type ActionsUnion = ItemActionsUnion;
export type ActionTypesUnion = Item;

export type ItemActionsUnion = SetItem | SyncItem;
