import { ADD_BOOK, REMOVE_BOOK, TOTAL_BOOKS } from "./action";

const initialState = { books: [], totalBooks: 0 };

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.ISBN != action.payload),
      };

    case TOTAL_BOOKS:
      return { ...state, totalBooks: state.books.length };

    default:
      return state;
  }
};

export default bookReducer;
