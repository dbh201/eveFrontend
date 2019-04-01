import { Component } from '@angular/core';
import { StaticDataService } from './static-data.service';
import { Store, select } from '@ngrx/store';
import { State } from './appdata.state';
import { typeIDSelector } from './appdata.selector';
import * as a from './appdata.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eveFrontend';
  typeID$: Subscription;
  state: string;
  constructor(private sds: StaticDataService, private store: Store<State>) {}
  ngOnInit() {
    console.log('App loading background service...');
    this.typeID$ = this.store.select(typeIDSelector).subscribe( {
      next: (tid) => {
        console.log( 'app found tid ' + tid );
        if ( tid >= 0 ) {
          console.log('Data service received tid: ' + tid);
          this.sds.getItemDetails(tid).subscribe( j => {
            console.log('Data service received item: ' + j.typeID);

            this.sds.getIconURL(j.iconID).subscribe( k => {
              console.log('Data service received icon: ' + k);
              j.iconURL = k;
              this.store.dispatch( new a.SyncItem(j) );
            });
          });
        }
      }});
    this.store.subscribe(b => { this.state = JSON.stringify(b); });
  }
}
