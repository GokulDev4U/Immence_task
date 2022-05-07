import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { display } from '@mui/system';

const ConversationList = ({ name, status, img }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
            <Avatar alt="Img" src={img} sx={{ width: 80, height: 80 }} />
            <Box>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="h6">{status}</Typography>
            </Box>
        </Box>
    );
};

export default ConversationList;