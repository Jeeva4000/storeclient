// import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const AddBook = () => {
//     const navigate = useNavigate()
//     const [inputs, setInputs] = useState({
//         name: '',
//         auhtor: '',
//         description: '',
//         author: '',
//         // available: false,
//         image: ''
//     });
//     const [checked, setChecked] = useState()

//     const handleChange = (e) => {
//         setInputs((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value
//         }))
//     }

//     const sendRequest = async () => {
//         await axios.post("http://localhost:5000/books/add", {
//             name: String(inputs.name),
//             author: String(inputs.auhtor),
//             description: String(inputs.description),
//             price: Number(inputs.price),
//             image: String(inputs.image),
//             available: Boolean(checked)
//         }).then(res => res.data)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(inputs, checked)
//         sendRequest().then(() => navigate('/books'))
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <Box display="flex" flexDirection="column" justifyContent={'center'} maxWidth={700} alignSelf={'center'} marginLeft={"auto"} marginRight={"auto"} marginTop={5} marginBottom={5}>
//                 <FormLabel>Name</FormLabel>
//                 <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name' />
//                 <FormLabel>Author</FormLabel>
//                 <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author' />
//                 <FormLabel>Description</FormLabel>
//                 <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' />
//                 <FormLabel>Price</FormLabel>
//                 <TextField value={inputs.price} onChange={handleChange} type='number' margin='normal' fullWidth variant='outlined' name='price' />
//                 <FormLabel>Image</FormLabel>
//                 <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />
//                 <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />
//                 <Button variant='contained' type='submit'>AddBook</Button>
//             </Box>
//         </form>
//     )
// }

// export default AddBook

import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        author: '',
        description: '',
        price: 0,
        image: '',
    });
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const sendRequest = async () => {
        try {
            const response = await fetch('http://localhost:5000/books/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: String(inputs.name),
                    author: String(inputs.author),
                    description: String(inputs.description),
                    price: Number(inputs.price),
                    image: String(inputs.image),
                    available: Boolean(checked),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to add book');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(() => navigate('/books'));
    };

    return (
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
                    AddBook
                </Button>
            </Box>
        </form>
    );
};

export default AddBook;
