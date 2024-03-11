import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

export default function Header() {
    return (
        <AppBar sx={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,21,222,1) 42%, rgba(0,212,255,1) 100%);" }}
            position='sticky'>

            <Toolbar>
                <Typography variant='h5'>Blogs App</Typography>
                <Box display="flex" marginLeft="auto">
                    <Button variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>Login</Button>
                    <Button variant='contained' sx={{ margin: 1, borderRadius: 10 }} color='warning'>SignUp</Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
