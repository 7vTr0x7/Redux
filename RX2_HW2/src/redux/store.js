import { createStore } from "redux";
import bookReducer from "./booksReducer";

const store = createStore(bookReducer);

export default store;
