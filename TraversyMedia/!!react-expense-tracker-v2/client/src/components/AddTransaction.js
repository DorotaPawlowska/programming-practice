import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [ text, setText ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="enter text ..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br/> (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="enter amount ..." />
        </div>
        <button className="btn">add transaction</button>
      </form>
    </>
  )
}
