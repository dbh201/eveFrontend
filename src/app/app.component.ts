import { Component } from '@angular/core';
import { StaticDataService } from './static-data.service';
import { Store, select } from '@ngrx/store';
import { State } from './root.state';
import { typeIDSelector } from './root.selector';
import * as a from './root.actions';
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
