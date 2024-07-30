import React, { useState } from "react";

const IncomeExpenseForm = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [entryType, setEntryType] = useState("");
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
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <br />
        <br />
        <button>Add Entry</button>
      </form>
    </div>
  );
};

export default IncomeExpenseForm;
