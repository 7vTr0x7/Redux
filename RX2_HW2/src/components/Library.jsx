import React from "react";
import { useSelector } from "react-redux";

const Library = () => {
  const totalBooks = useSelector((state) => state.totalBooks);

  return (
    <div>
      <h2>Library Summary</h2>
      <p>Total Books: {totalBooks}</p>
    </div>
  );
};

export default Library;
