export class PriceHistoryEntry {
  average: number;
  date: string;
  highest: number;
  lowest: number;
  orderCount: number;
  volume: number;
}
// FIXME: Map is only available in ES6, but target is ES5, and switching the target to ES6
// in tsconfig.json doesn't do anything. I still want to use Map<number, PriceHistoryEntry[]>
// but I guess I can't yet. Calling data.set() in any reducer does nothing, even with typecasting.
//
//
// export class PriceHistory {
//   data: Map<number, PriceHistoryEntry[]>;
//   constructor() { this.data = new Map<number, PriceHistoryEntry[]>(); }
// }

export class PriceHistory {
  typeID: number;
  data: { [key: number]: PriceHistoryEntry[] };
  constructor() { this.data = {}; }
}
