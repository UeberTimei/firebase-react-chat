import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useContext, useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import Loader from './Loader';
import firebase from 'firebase/compat/app';
import Message from './Message';


const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const [value, setValue] = useState('')

    const scroll = useRef()

    const sendMessage = async () => {
        if(value){
            firestore.collection('messages').add({
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                text: value,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setValue('')
            scroll.current.scrollIntoView({behavior: 'smooth'})
        } else {
            scroll.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    if(loading){
        return <Loader />
    }

    return (
        <Container>
            <Grid container
                justifyContent={'center'}
                style={{height: window.innerHeight - 50, marginTop:'10px'}} 
            >
                <div style={{width: '80%', height:'70vh', overflowY:'auto', borderLeft:'1px solid lightgray', borderRight:'1px solid lightgray'}}>
                    {messages && messages.map(msg => 
                        <Message message={msg} user={user} />
                    )}
                    <div ref={scroll}></div>
                </div>
                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width:'80%'}}
                >
                    <TextField
                        fullWidth
                        rowsmax={2}
                        variant={'outlined'}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button variant={'outlined'} style={{marginTop:'10px'}} onClick={sendMessage}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;