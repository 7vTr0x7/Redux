import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome } from "../redux/actions";

const Income = () => {
  const dispatch = useDispatch();

  const income = useSelector((state) => state.income);

  const totalIncome = income.reduce((acc, curr) => acc + curr.amount, 0);

  useEffect(() => {
    dispatch(fetchIncome());
  }, []);

  return (
    <div>
      <h1>Income Page</h1>
      <ul>
        {income.map((inc, index) => (
          <li key={index}>
            {inc.description} - ${inc.amount}
          </li>
        ))}
      </ul>
      <h2>Income Total: ${totalIncome}</h2>
    </div>
  );
};

export default Income;
