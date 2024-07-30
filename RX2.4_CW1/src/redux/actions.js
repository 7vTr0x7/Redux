export const FETCH_INCOME = "FETCH_INCOME_SUCCESS";
export const FETCH_EXPENSES = "FETCH_EXPENSES_SUCCESS";
export const ADD_ENTRY = "ADD_ENTRY_SUCCESS";

export const addEntry = (entry) => async (dispatch) => {
  try {
    console.log(entry);
    const res = fetch(
      " https://finance-app-backend-Student-neoG.replit.app/add-income",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    );

    if (!res.ok) {
      console.log("Failed to add entry");
    }

    const data = res.json();
    if (data.success === true) {
      console.log(data);
    }
  } catch (error) {
    console.log("Error adding entry");
  }
};
