export interface TickerData {
  time: number;
  ticker: TickerItem[];
}

interface TickerItem {
  symbol: string;
  last: string;
}
