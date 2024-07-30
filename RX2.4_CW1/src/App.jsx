import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Savings from "./pages/Savings";
import IncomeExpenseForm from "./pages/IncomeExpenseForm";

const App = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/expense">Expense</Link>
          </li>
          <li>
            <Link to="/savings">Savings</Link>
          </li>
          <li>
            <Link to="/">New Entries</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/" element={<IncomeExpenseForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
