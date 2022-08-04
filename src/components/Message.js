import React from "react";
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';

const Message = ({message, user}) => {
    return (
        <div style={{
            margin:10,
            marginLeft: user.uid === message.uid ? 'auto' : "10px",
            width:'fit-content',
        }}>
            <Grid container direction={"row"} alignItems={'center'}>
                <Avatar src={message.photoURL}/>
                <Grid style={{marginLeft:'10px'}}>
                    <div style={{fontWeight:"bold", borderBottom: user.uid === message.uid ? '2px solid green' : "1px solid lightgray",}}>{message.displayName}</div>
                    <div style={{marginTop:'2px'}}>{message.text}</div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Message;