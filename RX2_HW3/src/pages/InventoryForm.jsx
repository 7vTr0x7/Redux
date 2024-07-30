import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToItems, addItemToRemovedItems } from "../redux/actions";

const InventoryForm = () => {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [entryType, setEntryType] = useState("add");

  const dispatch = useDispatch();

  const handleAddItem = (e) => {
    e.preventDefault();

    if (entryType === "add") {
      dispatch(
        addItemToItems({ itemName, quantity: parseInt(quantity), entryType })
      );
    } else {
      dispatch(
        addItemToRemovedItems({
          itemName,
          quantity: parseInt(quantity),
          entryType,
        })
      );
    }
  };

  return (
    <div>
      <h1>Inventory Admin App</h1>
      <form>
        <label htmlFor="itemName">Item Name: </label>
        <br />
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="quantity">Item Quantity: </label>
        <br />
        <input
          type="text"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="entryType">Entry Type: </label>
        <br />
        <select id="entryType" onChange={(e) => setEntryType(e.target.value)}>
          <option value="add">Add to storage</option>
          <option value="remove">Remove from storage</option>
        </select>
        <br />
        <br />
        <button onClick={handleAddItem}>Add Item Data</button>
      </form>
    </div>
  );
};

export default InventoryForm;
