
import React, { useState, useEffect } from 'react';
import Book from './Book';
import "./Book.css"

const URL = "http://localhost:5000/books/allbooks";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setBooks(data);
            } catch (error) {
                setError(error.message || "An error occurred while fetching the books.");
            }
        };

        fetchBooks();
    }, []);

    console.log("Books:", books);

    return (
        <div>
            <ul>
                {books.books && (
                    books.books.map((book, i) => (
                        <li className='book' key={i}>
                            <Book book={book} />
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Books;
