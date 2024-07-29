import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_BOOK, TOTAL_BOOKS } from "./../redux/action";

const BookInput = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      ISBN: isbn,
      title: title,
      author: author,
    };

    dispatch({ type: ADD_BOOK, payload: newBook });
    dispatch({ type: TOTAL_BOOKS });
  };

  return (
    <div>
      <h1>Library Management</h1>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookInput;
