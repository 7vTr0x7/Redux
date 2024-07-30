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
      console.log("Failed to add");
    }
    const data = await res.json();
    if (data) {
      console.log(data);
    }
  } catch (error) {
    console.log("Error Occurred While Adding Item");
  }
};
