import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '../Card/Card';


const MyProfile = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography variant="h5">MyProfile</Typography>
                    <Stack direction="column" spacing={2} sx={{ alignItems: 'center' }}>
                        <Avatar alt="Remy Sharp" sx={{ width: 80, height: 80 }} src="https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
                        <Typography variant="h5">Anna Alvarado</Typography>
                        <Typography variant="h6" sx={{ maxWidth: 350 }}>Mahatma Gandhi Road, Mantralaya, Fort, Mumbai, Maharashtra 400032</Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                        <Card text="Photos" number="100" />
                        <Card text="Followers" number="200" />
                        <Card text="Follows" number="300" />
                    </Stack>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
    );
};

export default MyProfile;