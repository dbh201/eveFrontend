import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RequestPriceHistory } from '../appdata.actions';
import { priceHistorySelector, typeIDSelector } from '../appdata.selector';
import { PriceHistory } from '../price-history';
import { Store } from '@ngrx/store';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-price-history',
  templateUrl: './price-history.component.html',
  styleUrls: ['./price-history.component.scss']
})
export class PriceHistoryComponent implements OnInit {
  dataSub: Subscription;
  typeIDSub: Subscription;

  // Important note: ChartOptions implementation is located at node_modules/@types/chart.js/index.d.ts
  // Good luck finding any reasonable documentation.
  // TODO: test options
  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    }
  };
  public chartLabels: Label[] = ['day 1', 'day 2', 'day 3', 'day 4', 'day 5'];
  public chartType: ChartType = 'line';
  public chartLegend: false;
  public chartPlugins: [];
  public chartData: ChartDataSets[] = [
    { data: [1, 3, 4, 2, 0], label: 'Test data please ignore' },
    { data: [4, 2, 6, 3, 1], label: 'Test data' }
  ];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.dataSub = this.store.select(priceHistorySelector).subscribe( d => {
      console.log('PRICE-HISTORY: New data for the chart: ' + JSON.stringify(d));
      this.chartUpdate(d);
    });
    this.typeIDSub = this.store.select(typeIDSelector).subscribe(
      t => {
        console.log('PRICE-HISTORY: received new typeID ' + t);
        if (t > 0) {
          this.store.dispatch( new RequestPriceHistory(t) );
        }
      }
      );
  }
  chartUpdate(priceHistory: PriceHistory) {
    if (this.chartData === undefined) {
      this.chartData = new Array<ChartDataSets>();
    }
    Object.entries(priceHistory.data).map( entry => {
      const temp = { data: [] as number[], label: entry[0] } as ChartDataSets;
      for (const priceDataEntry of entry[1]) {
        (temp.data as number[]).push(priceDataEntry.average);
      }
      this.chartData.push(temp);
    });
  }
  ngOnDestroy() {
    this.typeIDSub.unsubscribe();
    this.dataSub.unsubscribe();
  }
}
