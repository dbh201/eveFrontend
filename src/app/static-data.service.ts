import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { State } from './appdata.state';
import { Item } from './item';
import { Observable } from 'rxjs';
import { typeIDSelector } from './appdata.selector';
import { map } from 'rxjs/operators';
import * as a from './appdata.actions';
import { PriceHistory } from './price-history';

const ICON_URL = 'http://localhost/Icons/items/';
const STATIC_URL = 'http://localhost:5000/api/';
const ESI_URL = 'https://esi.evetech.net/latest/';

@Injectable({
  providedIn: 'root'
})

export class StaticDataService {

  constructor(private http: HttpClient) {}

  getItemDetails(itemID: number): Observable<Item> {
    return this.http.get(STATIC_URL + 'item/details/byitemid/' + itemID)
      .pipe(
        map( (i) => {
          const r = {
              typeID: i[0][0],
              groupID: i[0][1],
              typeName: i[0][2],
              description: i[0][3],
              mass: i[0][4],
              volume: i[0][5],
              capacity: i[0][6],
              portionSize: i[0][7],
              raceID: i[0][8],
              basePrice: i[0][9],
              published: i[0][10],
              marketGroupID: i[0][11],
              iconID: i[0][12],
              soundID: i[0][13],
              graphicID: i[0][14],
              iconURL: ''
            } as Item;
          return r;
        }));
  }
  getIconURL(iconID: number): Observable<string> {
    return this.http.get(STATIC_URL + 'icon/byid/' + iconID)
      .pipe(
        map( (i) => {
          const file = i[0][0].split('/').pop();
          return (ICON_URL + file);
        }));
  }
  populateIconURLProperty(item: Item): Observable<Item> {
    return this.getIconURL(item.iconID).pipe(
      map(
      (s: string) => {
        return { ...item, iconURL: s } as Item;
      })
    );
  }
}
