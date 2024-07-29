import React from "react";
import { useSelector } from "react-redux";

const FinanceReport = () => {
  const income = useSelector((state) => state.income);
  const expenses = useSelector((state) => state.expenses);
  return (
    <div>
      <h2>Finance Report</h2>
      <p>Income: ${income}</p>
      <p>Expenses: ${expenses}</p>
      <p>Balance: ${income - expenses}</p>
    </div>
  );
};

export default FinanceReport;
