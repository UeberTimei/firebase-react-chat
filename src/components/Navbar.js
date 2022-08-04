import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {Grid, Button} from '@mui/material'
import '../App.css'
import {NavLink} from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static">
            <Toolbar variant={'dense'}>
                <Grid container justifyContent={'flex-end'}>
                    {user ? 
                        <Button onClick={() => auth.signOut()} variant='outlined' style={{color:'black'}}>Sign out</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant='outlined' style={{color:'black'}}>Log in</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;