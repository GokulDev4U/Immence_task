import React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SinglePost from '../SinglePost/SinglePost';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const Conversation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>

                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="search friend" variant="standard" />
                    </Box>

                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>

        </Box>
    );
};

export default Conversation;