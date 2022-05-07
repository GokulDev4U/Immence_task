import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Card = ({ text, number }) => {
    return (
        <Stack direction="column" spacing={1.5} sx={{ alignItems: 'center' }}>
            <Typography variant="h6">{text}</Typography>
            <Typography variant="h5">{number}</Typography>
        </Stack>
    );
};

export default Card;