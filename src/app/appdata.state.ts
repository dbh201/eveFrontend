import { Item } from './item';
import { PriceData } from './pricedata';
import { CargoType } from './cargotype';

export interface State {
  typeID: number;
  itemDetails: Item;
  priceData: PriceData[];
  baseSolarSystem: number;
  allowedRegions: number[];
  cargoType: CargoType;
  capacity: number;
  maxJumps: number;
  lowSec: boolean;
}
