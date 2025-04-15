import React, { useState, useEffect } from "react";

function BookLibrary() {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    // Fetch books from the API
    fetch("https://api.example.com/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleBorrow = (book) => {
    setBorrowedBooks((prev) => [...prev, book]);
  };

  return (
    <div className="book-library">
      <h2>Library</h2>
      <div className="book-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <button onClick={() => handleBorrow(book)}>
                {borrowedBooks.some((b) => b.id === book.id)
                  ? "Already Borrowed"
                  : "Borrow"}
              </button>
            </div>
          ))
        ) : (
          <p>Loading books...</p>
        )}
      </div>
      <h3>Borrowed Books:</h3>
      <ul>
        {borrowedBooks.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookLibrary;
