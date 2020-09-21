import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
//list expenses and add delete function on the expense list
export const Expenses = ({ expenses }) => {
  const { deleteExpense } = useContext(GlobalContext);

  const sign = expenses.amount < 0 ? '-' : '+';

  return (
    <li className={expenses.amount < 0 ? 'minus' : 'plus'}>
      {expenses.text} <span>{sign}R{Math.abs(expenses.amount)}</span><button onClick={() => deleteExpense(expenses.id)} className="delete-btn">x</button>
    </li>
  )
}