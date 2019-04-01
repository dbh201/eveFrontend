import { Item } from './item';
import { CargoType } from './cargotype';

export interface State {
  typeID: number;
  item: Item;
  baseSolarSystem: number;
  allowedRegions: number[];
  cargoType: CargoType;
  capacity: number;
  maxJumps: number;
  lowSec: boolean;
}
