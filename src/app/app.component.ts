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
  constructor(private sds: StaticDataService, private store: Store<State>) {}
  ngOnInit() {
    console.log('App loading background service...');
    this.typeID$ = this.store.select(typeIDSelector).subscribe( {
      next: (tid) => {
        if ( tid > 0 ) {
          this.sds.getItemDetails(tid).subscribe( j => {

            this.sds.getIconURL(j.iconID).subscribe( k => {
              j.iconURL = k;
              this.store.dispatch( new a.SyncItem(j) );
            });
          });
        }
      }});
  }
}
