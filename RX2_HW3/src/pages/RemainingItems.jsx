import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storageItems, removedItems } from "../redux/actions";

const RemainingItems = () => {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);
  const removedItem = useSelector((state) => state.removedItems);

  const totalItems = items.reduce((acc, curr) => acc + curr.itemQuantity, 0);

  const totalRemovedItems = removedItem.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );

  const totalRemaining = totalItems - totalRemovedItems;

  useEffect(() => {
    dispatch(storageItems());
  }, []);
  useEffect(() => {
    dispatch(removedItems());
  }, []);

  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total: {totalRemaining}</h2>
    </div>
  );
};

export default RemainingItems;
