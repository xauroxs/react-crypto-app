import { CurrencyType, HistoryType } from "./currency.types";

export interface CurrencyRequestType {
  data: CurrencyType;
  timestamp: number;
}

export interface CurrenciesRequestType {
  data: CurrencyType[];
  timestamp: number;
}

export interface CurrencyHistoryRequestType {
  data: HistoryType[];
  timestamp: number;
}
