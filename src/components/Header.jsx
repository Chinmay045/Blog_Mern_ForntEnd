import React, { useState } from 'react'
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

export default function Header() {
    const [value, setValue] = useState();

    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <AppBar sx={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,21,222,1) 42%, rgba(0,212,255,1) 100%);" }}
            position='sticky'>

            <Toolbar>
                <Typography variant='h5'>Blogs App</Typography>
                {isLoggedIn && <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
                    <Tabs textColor='inherit' value={value} onChange={(e, value) => setValue(value)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All-Blogs" />
                        <Tab LinkComponent={Link} to="/myBlogs" label="My-Blogs" />
                    </Tabs>
                </Box>}
                <Box display="flex" marginLeft="auto">
                    {!isLoggedIn && <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>}
                    {!isLoggedIn && (<Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>SignUp</Button>)}
                    {isLoggedIn && < Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Logout</Button>}

                </Box>
            </Toolbar>
        </AppBar >
    )
}
