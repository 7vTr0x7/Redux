export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_REMOVED_ITEMS = "FETCH_REMOVED_ITEMS";
export const ADD_ITEM = "ADD_ITEM";

export const addItemToItems = (entry) => async (dispatch) => {
  try {
    const res = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    );
    if (!res.ok) {
      console.log("Failed to add", res);
    }
    const data = await res.json();
    if (data.success === true) {
      console.log(data);
      dispatch({ type: ADD_ITEM, payload: data.data });
    }
  } catch (error) {
    console.log("Error Occurred While Adding Item");
  }
};

export const addItemToRemovedItems = (entry) => async (dispatch) => {
  try {
    const res = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    );
    if (!res.ok) {
      console.log("Failed to add");
    }
    const data = await res.json();
    if (data.success === true) {
      console.log(data);
      dispatch({ type: ADD_ITEM, payload: data.data });
    }
  } catch (error) {
    console.log("Error Occurred While Adding Item");
  }
};

export const storageItems = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/storage-items"
    );
    if (!res.ok) {
      console.log("Failed to add");
    }
    const data = await res.json();
    if (data) {
      console.log(data);
      dispatch({ type: FETCH_ITEMS, payload: data });
    }
  } catch (error) {
    console.log("Error Occurred While Adding Item");
  }
};
export const removedItems = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store"
    );
    if (!res.ok) {
      console.log("Failed to add");
    }
    const data = await res.json();
    if (data) {
      console.log(data);
      dispatch({ type: FETCH_REMOVED_ITEMS, payload: data });
    }
  } catch (error) {
    console.log("Error Occurred While Adding Item");
  }
};
