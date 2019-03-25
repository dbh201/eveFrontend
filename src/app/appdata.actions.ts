import { Action } from '@ngrx/store';
import { Item } from './item';

export enum Actions {
  SetItem = '[Global] Set selected item',
  SyncItem = '[Global] Sync item details',
}
export class SetItem implements Action {
  readonly type = Actions.SetItem ;
  constructor(public typeID: number) {}
}
export class SyncItem implements Action {
  readonly type = Actions.SyncItem ;
  constructor(public item: Item) {}
}
export type ActionsUnion = SetItem | SyncItem;

