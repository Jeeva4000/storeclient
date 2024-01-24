// // import { Button } from '@mui/material';
// // import React from 'react'
// // import "./Book.css"
// // import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // const Book = (props) => {
// //     const navigate = useNavigate()
// //     console.log(props.book);

// //     const { _id, name, author, description, price, image } = props.book;
// //     console.log(name, author, description, price, image);

// //     const deletHandler = () => {
// //         axios.delete(`http://localhost:5000/books/${_id}`).then(() => navigate("/books"))
// //     }

// //     return (
// //         <div className='card'>
// //             <img src={image} alt={name} />
// //             <article>By {author} </article>
// //             <h3>{name}</h3>
// //             <p>{description} </p>
// //             <h3>Rs{price} </h3>
// //             <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }}>Update</Button>
// //             <Button onClick={deletHandler} sx={{ mt: 'auto' }}>Delete</Button>
// //         </div>
// //     )
// // }

// // export default Book

// import { Button } from '@mui/material';
// import React from 'react';
// import "./Book.css";
// import { Link, useNavigate } from 'react-router-dom';

// const Book = (props) => {
//     const navigate = useNavigate();
//     console.log(props.book);

//     const { _id, name, author, description, price, image } = props.book;
//     console.log(name, author, description, price, image);

//     const deleteHandler = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/books/${_id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',

//                 },
//             });

//             if (response.ok) {

//                 navigate("/books");
//                 navigate("/books")
//             } else {

//                 console.error('Failed to delete book');
//             }
//         } catch (error) {
//             console.error('Error deleting book:', error);
//         }
//     };

//     return (
//         <div className='card'>
//             <img src={image} alt={name} />
//             <article>By {author} </article>
//             <h3>{name}</h3>
//             <p>{description} </p>
//             <h3>Rs{price} </h3>
//             <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }}>Update</Button>
//             <Button onClick={deleteHandler} sx={{ mt: 'auto' }}>Delete</Button>
//         </div>
//     );
// };

// export default Book;
import { Button } from '@mui/material';
import React, { useState } from 'react';
import "./Book.css";
import { Link, useNavigate } from 'react-router-dom';
// import DeleteIcon from '@mui/icons-material/Delete';

const Book = (props) => {
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false);

    const { _id, name, author, description, price, image } = props.book;

    const deleteHandler = async () => {
        try {
            const response = await fetch(`https://bookstore-7x0p.onrender.com/books/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                navigate("/books");
            } else {
                console.error('Failed to delete book');
            }
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className='card'>
            <div className="book-container">
                <img src={image} alt={name} className={`book-image ${showDetails ? 'small' : ''}`} onClick={toggleDetails} />
                {showDetails && (
                    <div className="book-details">
                        <article>By {author} </article>
                        <h3>{name}</h3>
                        <p>{description} </p>
                        <h3>Rs{price} </h3>
                        <Button color="primary" LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto', border: "1px solid lightblue", background: "orange", color: "black" }}>Update</Button>
                        <Button variant="outlined" onClick={deleteHandler} sx={{ mt: 2, border: "1px solid lightblue", background: "red", color: "black" }}>Delete</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Book;
