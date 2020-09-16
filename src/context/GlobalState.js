import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  expenses: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteExpense(id) {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    });
  }

  function addExpense(expense) {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });
  }

  return (<GlobalContext.Provider value={{
    expenses: state.expenses,
    deleteExpense,
    addExpense
  }}>
    {children}
  </GlobalContext.Provider>);
}