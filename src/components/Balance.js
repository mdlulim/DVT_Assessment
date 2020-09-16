import React, { useContext } from 'react';
import { Alert } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { expenses } = useContext(GlobalContext);

  const amounts = expenses.map(expenses => expenses.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
    {total ? <Alert color="success">
                <h4>Your Balance</h4>
                <h1>R{total}</h1>
             </Alert>: <Alert color="warning">
                          <h4>Your Balance</h4>
                          <h1>R{total}</h1>
                        </Alert>}

    </div>
  )
}
