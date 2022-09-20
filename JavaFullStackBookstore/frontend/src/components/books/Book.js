import { React } from "react";

const Book = (props) => {
  const { bookId, bookTitle, bookGenre, bookBinding, bookPrice } = props.book;

  return (
    <div>
      <h1>{bookTitle}</h1>
      <h2>{bookGenre}</h2>
      <h3>{bookBinding}</h3>
      <h2>{bookPrice}</h2>
    </div>
  );
};

export default Book;