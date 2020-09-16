import React, { useContext } from 'react';
import { Expenses } from './Expenses';

import { GlobalContext } from '../context/GlobalState';

export const ExpensesList = () => {
  const { expenses } = useContext(GlobalContext);

  return (
    <>
      <h3>Expenses List</h3>
      <ul className="list">
        {expenses.map(expenses => (<Expenses key={expenses.id} expenses={expenses} />))}
      </ul>
    </>
  )
}