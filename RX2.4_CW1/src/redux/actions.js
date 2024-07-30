export const FETCH_INCOME = "FETCH_INCOME_SUCCESS";
export const FETCH_EXPENSES = "FETCH_EXPENSES_SUCCESS";
export const ADD_ENTRY = "ADD_ENTRY_SUCCESS";

export const addEntry = (entry) => async (dispatch) => {
  try {
    const res = await fetch(
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

    const data = await res.json();
    if (data.success === true) {
      dispatch({ type: ADD_ENTRY, payload: data.data });
    }
  } catch (error) {
    console.log("Error adding entry");
  }
};

export const fetchIncome = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://finance-app-backend-Student-neoG.replit.app/income"
    );

    if (!res.ok) {
      console.log("Failed to fetch");
    }

    const data = await res.json();
    if (data) {
      dispatch({ type: FETCH_INCOME, payload: data });
    }
  } catch (error) {
    console.log("error occurred while fetching income");
  }
};

export const fetchExpenses = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://finance-app-backend-Student-neoG.replit.app/expenses"
    );

    if (!res.ok) {
      console.log("Failed to fetch");
    }

    const data = await res.json();
    if (data) {
      dispatch({ type: FETCH_EXPENSES, payload: data });
    }
  } catch (error) {
    console.log("error occurred while fetching expenses");
  }
};
