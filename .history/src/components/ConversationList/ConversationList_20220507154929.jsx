import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { display } from '@mui/system';

const ConversationList = ({ name, status, img }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Avatar alt="Img" src={img} />
            <Box>
                <Typography variant="h5">hello</Typography>
                <Typography variant="h6">Alvarado</Typography>
            </Box>
        </Box>
    );
};

export default ConversationList;