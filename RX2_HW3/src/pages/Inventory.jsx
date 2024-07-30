import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storageItems } from "../redux/actions";

const Inventory = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(storageItems());
  }, []);

  return (
    <div>
      <h1>Inventory Items</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemName} - {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Total Inventory Items:</h2>
    </div>
  );
};

export default Inventory;
