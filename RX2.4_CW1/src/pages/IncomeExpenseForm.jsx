import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense, addIncome } from "../redux/actions";

const IncomeExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [entryType, setEntryType] = useState("income");

  const dispatch = useDispatch();

  const handleAddEntry = (e) => {
    e.preventDefault();

    if (entryType === "income") {
      dispatch(
        addIncome({ description, amount: parseFloat(amount), entryType })
      );
    } else {
      dispatch(
        addExpense({ description, amount: parseFloat(amount), entryType })
      );
    }
    setDescription("");
    setAmount("");
    setEntryType("income");
  };

  return (
    <div>
      <h1>New Entry Page</h1>
      <form>
        <label htmlFor="description">Description: </label>
        <br />
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="amount">Amount: </label>
        <br />
        <input
          type="text"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="selectEntryType">Entry Type:</label>
        <br />
        <select
          id="selectEntryType"
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <br />
        <br />
        <button onClick={handleAddEntry}>Add Entry</button>
      </form>
    </div>
  );
};

export default IncomeExpenseForm;
