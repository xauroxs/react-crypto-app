import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import CurrenciesPage from "../pages/currencies/currencies.page";
import CurrencyPage from "../pages/currency/currency.page";
import NotFoundPage from "../pages/not-found/not-found.page";

import "./app.module.scss";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="currencies" element={<CurrenciesPage />} />
        <Route path="currencies/:cryptocurrencyId" element={<CurrencyPage />} />

        <Route path="not-found" element={<NotFoundPage />} />

        <Route path="" element={<Navigate to="/currencies" replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
