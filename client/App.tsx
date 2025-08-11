import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Index from '@/pages/Index';
import CreditCards from '@/pages/CreditCards';
import IncomeExpenses from '@/pages/IncomeExpenses';
import DebtPayoff from '@/pages/DebtPayoff';
import NotFound from '@/pages/NotFound';

const Budget = () => (
  <div className="p-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Budget Planner
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          This page will show budget creation, category allocation, and spending tracking vs budget.
        </p>
        <p className="text-sm text-slate-500">
          Continue prompting to have this page built out with full functionality.
        </p>
      </div>
    </div>
  </div>
);

const Transactions = () => (
  <div className="p-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Transaction History
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          This page will show detailed transaction history, categorization, and search/filter functionality.
        </p>
        <p className="text-sm text-slate-500">
          Continue prompting to have this page built out with full functionality.
        </p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/income-expenses" element={<IncomeExpenses />} />
          <Route path="/debt-payoff" element={<DebtPayoff />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
