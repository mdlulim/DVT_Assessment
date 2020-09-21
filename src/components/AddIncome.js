import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

//Add income and create an id to eact income
export const AddIncome = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addIncome } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newIncome = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addIncome(newIncome);
  }

  return (
    <>
      <h3>Add Income</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"></label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Income type..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Income</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Income</button>
      </form>
    </>
  )
}
