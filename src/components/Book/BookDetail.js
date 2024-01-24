// import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// const BookDetail = () => {
//     const [inputs, setInputs] = useState({})
//     const id = useParams().id;
//     const [checked, setChecked] = useState(false)
//     const navigate = useNavigate()
//     console.log(id)
//     useEffect(() => {
//         const fetchHandler = async () => {
//             await axios.get(`http://localhost:5000/books/${id}`).then(res => res.data).then(data => setInputs(data.book))
//         }
//         fetchHandler()
//     }, [id])

//     const sendRequest = async () => {
//         await axios.put(`http://localhost:5000/books/${id}`, {
//             name: String(inputs.name),
//             author: String(inputs.author),
//             description: String(inputs.description),
//             price: Number(inputs.price),
//             image: String(inputs.image),
//             available: Boolean(checked),
//         }).then(res => res.data)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         sendRequest().then(() => navigate("/books"))
//     }
//     const handleChange = (e) => {
//         // console.log(e);
//         setInputs((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }));
//     }
//     console.log(inputs);
//     return (
//         <div>
//             {inputs && (<form onSubmit={handleSubmit}>
//                 <Box
//                     display="flex"
//                     flexDirection="column"
//                     justifyContent={'center'}
//                     maxWidth={700}
//                     alignSelf={'center'}
//                     marginLeft={'auto'}
//                     marginRight={'auto'}
//                     marginTop={5}
//                     marginBottom={5}
//                 >
//                     <FormLabel>Name</FormLabel>
//                     <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />
//                     <FormLabel>Author</FormLabel>
//                     <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />
//                     <FormLabel>Description</FormLabel>
//                     <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />
//                     <FormLabel>Price</FormLabel>
//                     <TextField value={inputs.price} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="price" />
//                     <FormLabel>Image</FormLabel>
//                     <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />
//                     <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />
//                     <Button variant="contained" type="submit">
//                         UpdateBook
//                     </Button>
//                 </Box>
//             </form>)}
//         </div>
//     )
// }

// export default BookDetail


import React, { useEffect, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetail = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(`https://bookstore-7x0p.onrender.com/books/${id}`);
                setInputs(response.data.book);
            } catch (error) {
                console.error('Error fetching book:', error);
            }
        };

        fetchBook();
    }, [id]);

    const sendRequest = async () => {
        try {
            await axios.put(`https://bookstore-7x0p.onrender.com/books/${id}`, {
                name: String(inputs.name),
                author: String(inputs.author),
                description: String(inputs.description),
                price: Number(inputs.price),
                image: String(inputs.image),
                available: Boolean(checked),
            });
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendRequest();
        navigate('/books');
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div>
            {inputs && (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent={'center'}
                        maxWidth={700}
                        alignSelf={'center'}
                        marginLeft={'auto'}
                        marginRight={'auto'}
                        marginTop={5}
                        marginBottom={5}
                    >
                        <FormLabel>Name</FormLabel>
                        <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />
                        <FormLabel>Author</FormLabel>
                        <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />
                        <FormLabel>Description</FormLabel>
                        <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="description" />
                        <FormLabel>Price</FormLabel>
                        <TextField value={inputs.price} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="price" />
                        <FormLabel>Image</FormLabel>
                        <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />
                        <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />
                        <Button variant="contained" type="submit">
                            Update Book
                        </Button>
                    </Box>
                </form>
            )}
        </div>
    );
};

export default BookDetail;
