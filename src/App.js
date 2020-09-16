import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './containers/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { ExpensesList } from './components/ExpensesList';
import { AddExpense } from './components/AddExpense';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
       <Header />
       <Balance />
       <IncomeExpenses />
       <ExpensesList />
       <AddExpense />
      <header className="App-header">
      </header>
    </div>
  </GlobalProvider>
  );
}

export default App;
