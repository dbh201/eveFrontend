import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const ICON_URL = 'http://localhost/Icons/items/';
const STATIC_URL = 'http://localhost:5000/api/';

@Injectable({
  providedIn: 'root'
})

export class StaticDataService {

  constructor(private http: HttpClient) { }

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
              graphicID: i[0][14]
            } as Item;
          return r;
        }));
  }
  getIconURL(iconID: number): Observable<string> {
    return this.http.get(STATIC_URL + 'icon/byid/' + iconID)
      .pipe(
        map( (i) => {
          const file = i[0][0].split('/').pop();
          console.log(i + ' mapped to ' + ICON_URL + file);
          return (ICON_URL + file);
        }));
  }
}
