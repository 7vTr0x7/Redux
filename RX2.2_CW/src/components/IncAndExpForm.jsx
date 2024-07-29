import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_EXPENSE, ADD_INCOME } from "../redux/action";

const IncAndExpForm = () => {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handleAddIncome = () => {
    dispatch({ type: ADD_INCOME, payload: parseFloat(amount) });
    setAmount(0);
  };
  const handleAddExpense = () => {
    dispatch({ type: ADD_EXPENSE, payload: parseFloat(amount) });
    setAmount(0);
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAddIncome}>Add Income</button>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default IncAndExpForm;
