import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestPriceHistory } from '../appdata.actions';
import { PriceData } from '../pricedata';
import { priceDataSelector } from '../appdata.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.scss']
})
export class PriceHistoryComponent implements OnInit {
  data$: Observable<PriceData[]>;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.data$ = this.store.select(priceDataSelector);
    this.store.dispatch( new RequestPriceHistory() );
  }

}
