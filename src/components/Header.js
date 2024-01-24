import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState()
    return (
        <div>

            <AppBar sx={{ backgroundColor: "#232F3D" }} position='sticky'>
                <Toolbar>
                    <NavLink to='/' style={{ color: 'white' }}>
                        <Typography><LibraryBooksIcon /></Typography></NavLink>
                    <Tabs sx={{ ml: 'auto' }} indicatorColor="secondary" textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={NavLink} to="/books" label='Books' />
                        <Tab LinkComponent={NavLink} to="/add" label='ADD PRODUCTS' />
                        <Tab LinkComponent={NavLink} to="/about" label='ABOUT US' />

                    </Tabs>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header