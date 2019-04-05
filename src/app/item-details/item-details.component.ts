import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../item';
import { Store, select } from '@ngrx/store';
import { State } from '../appdata.state';
import { RequestItemDetails } from '../appdata.actions';
import { itemDetailsSelector } from '../appdata.selector';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  // TODO: 3d graphics ?
  itemID: number;
  item$: Observable<Item>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.item$ = this.store.select(itemDetailsSelector);
  }
  update() {
    this.store.dispatch(new RequestItemDetails(this.itemID));
  }
}
