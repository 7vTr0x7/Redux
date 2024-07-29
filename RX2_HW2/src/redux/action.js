export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const TOTAL_BOOKS = "TOTAL_BOOKS";

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export const totalBooks = () => ({
  type: TOTAL_BOOKS,
});
