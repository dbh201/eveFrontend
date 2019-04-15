import { Item } from './item';
import { PriceHistory } from './price-history';
import { CargoType } from './cargotype';

export interface State {
  typeID: number;
  itemDetails: Item;
  priceHistory: PriceHistory;
  baseSolarSystem: number;
  regionList: number[];
  cargoType: CargoType;
  capacity: number;
  maxJumps: number;
  lowSec: boolean;
}
