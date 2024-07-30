import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "../redux/actions";

const Expenses = () => {
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expenses);

  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  return (
    <div>
      <h1>Expenses Page</h1>
      <ul>
        {expenses.map((exp, index) => (
          <li key={index}>
            {exp.description} - ${exp.amount}
          </li>
        ))}
      </ul>
      <h2>Expenses Total: ${totalExpense}</h2>
    </div>
  );
};

export default Expenses;
