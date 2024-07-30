import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removedItems } from "./../redux/actions";

const RemovedItems = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.removedItems);

  const totalItems = items.reduce((acc, curr) => acc + curr.itemQuantity, 0);

  useEffect(() => {
    dispatch(removedItems());
  }, []);

  return (
    <div>
      <h1>Removed Items From Inventory</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemName} - {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Removed Items Total: {totalItems}</h2>
    </div>
  );
};

export default RemovedItems;
