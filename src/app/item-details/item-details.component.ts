import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { StaticDataService } from '../static-data.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  // TODO: 3d graphics ?
  item: Item ;
  icon = '' ;
  itemID: number ;
  constructor(private sds: StaticDataService) { }

  ngOnInit() {
  }
  update() {
    this.sds.getItemDetails(this.itemID).subscribe(i => {
      this.item = i;
      this.sds.getIconURL(this.item.iconID).subscribe(j => {this.icon = j; console.log(this.icon + ' loaded.'); });
    });
  }
}
