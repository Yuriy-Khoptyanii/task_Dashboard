import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { Customers } from './pages/customers/Customers';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Help } from './pages/help/Help';
import { Income } from './pages/income/Income';
import { PageNotFound } from './pages/pageNotFound/PageNotFound';
import { Product } from './pages/product/Product';
import { Promote } from './pages/promote/Promote';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route index element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/income" element={<Income />} />
        <Route path="/product" element={<Product />} />
        <Route path="/promote" element={<Promote />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
