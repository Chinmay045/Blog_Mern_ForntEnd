import React, { useState } from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Header() {
    const [value, setValue] = useState();
    return (
        <AppBar sx={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,21,222,1) 42%, rgba(0,212,255,1) 100%);" }}
            position='sticky'>

            <Toolbar>
                <Typography variant='h5'>Blogs App</Typography>
                <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
                    <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All-Blogs" />
                        <Tab LinkComponent={Link} to="/myBlogs" label="My-Blogs" />
                    </Tabs>
                </Box>
                <Box display="flex" marginLeft="auto">
                    <Button  LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>
                    <Button  LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>SignUp</Button>
                    <Button  LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Logout</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
