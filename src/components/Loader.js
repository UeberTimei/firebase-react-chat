import { Container, Grid } from '@mui/material';
import React from 'react';
import '../App.css';

const Loader = () => {
    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid
                    container
                    alignItems={'center'}
                    direction={'column'}
                >
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;