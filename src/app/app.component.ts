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
  constructor() {}
  ngOnInit() {}
}
