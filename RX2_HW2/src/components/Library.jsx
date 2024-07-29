import React from "react";
import { useSelector } from "react-redux";
import { REMOVE_BOOK, TOTAL_BOOKS } from "../redux/action";
import { useDispatch } from "react-redux";

const Library = () => {
  const totalBooks = useSelector((state) => state.totalBooks);
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const removeBookHandler = (isbn) => {
    dispatch({ type: REMOVE_BOOK, payload: isbn });
    dispatch({ type: TOTAL_BOOKS });
  };

  return (
    <div>
      <h2>Library Summary</h2>
      <p>Total Books: {totalBooks}</p>
      <ul>
        {books.length > 0 &&
          books.map((book) => (
            <li key={book.ISBN}>
              {`${book.title} by ${book.author} (ISBN: ${book.ISBN})`}
              <button onClick={() => removeBookHandler(book.ISBN)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Library;
