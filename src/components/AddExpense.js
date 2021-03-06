import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddExpense = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addExpense } = useContext(GlobalContext);
  //Add expenses and create an id to eact expense
  const onSubmit = e => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addExpense(newExpense);
  }

  return (
    <>
      <h3>Add new Expenses</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"></label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Expence type..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            (add negative amount for expense and positive amount forincome) <br /> Eg(expense -300)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn btn-info">Add </button>
      </form>
    </>
  )
}
