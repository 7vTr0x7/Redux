export const ADD_INCOME = "add/income";
export const ADD_EXPENSE = "add/expense";

export const addIncome = (amt) => ({
  type: ADD_INCOME,
  payload: amt,
});
export const addExpense = (amt) => ({
  type: ADD_EXPENSE,
  payload: amt,
});
