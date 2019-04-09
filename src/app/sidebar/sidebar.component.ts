import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../appdata.state';
import { SetItem } from '../appdata.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  propBuffer: any;
  typeID: number;
  constructor(private store: Store<State>) { }
  state$: Observable<State>;
  ngOnInit() {
    console.log('Sidebar loaded with defaults.');
    this.state$ = this.store.select('state');
  }
  setItem() {
    this.store.dispatch(new SetItem(this.typeID));
  }
}
