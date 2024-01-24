import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Box display='flex' flexDirection='column' alignItems='center'>

                <Typography>
                    <Button LinkComponent={Link} to='/books' sx={{ marginTop: 15, background: 'orangered' }} variant='contained'>
                        <Typography variant='h3'>View All Products</Typography>
                    </Button>
                </Typography>
            </Box>

        </div>
    )
}

export default Home