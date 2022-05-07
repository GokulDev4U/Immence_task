import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const Card = () => {
    return (
        <Stack direction="column" spacing={2} sx={{ alignItems: 'center' }}>

            <Typography variant="h5">Anna Alvarado</Typography>
            <Typography variant="h6" sx={{ maxWidth: 200 }}></Typography>
        </Stack>
    );
};

export default Card;