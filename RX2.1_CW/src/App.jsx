import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleClick = (type) => {
    dispatch({ type });
  };

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => handleClick("add")}>Add</button>
      <button onClick={() => handleClick("minus")}>Minus</button>
    </div>
  );
};

export default App;
