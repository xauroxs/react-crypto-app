import axios from "axios";

import {
  CurrencyRequestType,
  CurrenciesRequestType,
  CurrencyHistoryRequestType,
} from "../../types/currency-api.types";
import { CurrencyType, HistoryType } from "../../types/currency.types";

import { HISTORY_INTERVALS } from "../../constants/currency-history.constants";

export const getCurrencyData = async (id: string): Promise<CurrencyType> => {
  const url = `https://api.coincap.io/v2/assets/${id}`;

  let data: CurrencyType = {
    id: "",
    rank: "",
    symbol: "",
    name: "",
    supply: "",
    maxSupply: "",
    marketCapUsd: "",
    volumeUsd24Hr: "",
    priceUsd: "",
    changePercent24Hr: "",
    vwap24Hr: "",
    explorer: "",
  };

  await axios
    .get<CurrencyRequestType>(url)
    .then((response) => {
      data = { ...data, ...response.data.data };
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

export const getCurrenciesData = async (
  limit: number = 10,
  offset: number = 0
): Promise<CurrencyType[]> => {
  const url = `https://api.coincap.io/v2/assets?limit=${limit}&offset=${offset}`;

  let data: CurrencyType[] = [];

  await axios
    .get<CurrenciesRequestType>(url)
    .then((response) => {
      data = response.data.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};

export const getCurrencyHistoryData = async (
  id: string,
  interval: HISTORY_INTERVALS
) => {
  const url = `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`;

  let data: HistoryType = {
    priceUsd: "0",
    time: 0,
  };

  await axios
    .get<CurrencyHistoryRequestType>(url)
    .then((response) => {
      data = { ...data, ...response.data.data };
    })
    .catch((error) => console.log(error));

  return data;
};
