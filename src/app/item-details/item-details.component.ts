import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  itemID: number ;
  resultCols: Array<string> ;
  result: Array<any> ;
  details: { [key: string]: string } ;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.resultCols = [
      'typeID',
      'groupID',
      'typeName',
      'description',
      'mass',
      'volume',
      'capacity',
      'portionSize',
      'raceID',
      'basePrice',
      'published',
      'marketGroupID',
      'iconID',
      'soundID',
      'graphicID'
    ];
    this.details = { };
  }
  update() {
    this.http.get<any>('http://localhost:5000/api/item/details/byitemid/' + this.itemID).subscribe(
      r => {
        this.result = r;
        for ( let i = 0; i < this.resultCols.length ; i++ ) {
          this.details[this.resultCols[i]] = this.result[0][i];
        }
        console.log(Object.keys(this.details));
      }
    );
  }
}
