import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IgnoredListComponent } from './ignored-list/ignored-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { TradeCalculatorComponent } from './trade-calculator/trade-calculator.component';
import { BuySellDepthComponent } from './buy-sell-depth/buy-sell-depth.component';
import { PriceHistoryComponent } from './price-history/price-history.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: 'ignored-list',
    component: IgnoredListComponent
  }, {
    path: 'item-details',
    component: ItemDetailsComponent
  }, {
    path: 'trade-calculator',
    component: TradeCalculatorComponent
  }, {
    path: 'buy-sell-depth',
    component: BuySellDepthComponent
  }, {
    path: 'price-history',
    component: PriceHistoryComponent
	}, {
		path: '',
		component: ContentComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
