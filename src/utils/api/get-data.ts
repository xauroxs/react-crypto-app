import axios from "axios";

import {
  CurrencyRequestType,
  CurrenciesRequestType,
  CurrencyHistoryRequestType,
} from "../../types/currency-api.types";

import { HISTORY_INTERVALS } from "../../constants/currency-history.constants";

export const getCurrencyData = async (id: string) => {
  const url = `https://api.coincap.io/v2/assets/${id}`;

  axios
    .get<CurrencyRequestType>(url)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => console.log(error));
};

export const getCurrenciesData = async () => {
  const url = "https://api.coincap.io/v2/assets";

  axios
    .get<CurrenciesRequestType>(url)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => console.log(error));
};

export const getCurrencyHistoryData = async (
  id: string,
  interval: HISTORY_INTERVALS
) => {
  const url = `https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`;

  axios
    .get<CurrencyHistoryRequestType>(url)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => console.log(error));
};
