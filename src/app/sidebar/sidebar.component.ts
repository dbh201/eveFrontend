import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../root.state';
import { SetItem, AddMarketRegion, RemoveMarketRegion } from '../root.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  propBuffer: any;
  typeID: number;
  regionID: number;
  constructor(private store: Store<State>) { }
  state$: Observable<State>;
  ngOnInit() {
    console.log('Sidebar loaded with defaults.');
    this.state$ = this.store.select('state');
  }
  addRegion() {
    this.store.dispatch(new AddMarketRegion(this.regionID));
  }
  rmRegion() {
    this.store.dispatch(new RemoveMarketRegion(this.regionID));
  }
  setItem() {
    this.store.dispatch(new SetItem(this.typeID));
  }
}
