import  { useEffect, createContext, useState } from "react";
import PropTypes from "prop-types";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : []; // Trả về mảng trống nếu không có giá trị
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => {
    const newBook = { ...book, id: self.crypto.randomUUID() };
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const editBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };

  const delBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, editBook, delBook }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
