import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IgnoredListComponent } from './ignored-list/ignored-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { TradeCalculatorComponent } from './trade-calculator/trade-calculator.component';
import { BuySellDepthComponent } from './buy-sell-depth/buy-sell-depth.component';
import { PriceHistoryComponent } from './price-history/price-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    TopbarComponent,
    SidebarComponent,
    IgnoredListComponent,
    ItemDetailsComponent,
    TradeCalculatorComponent,
    BuySellDepthComponent,
    PriceHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
