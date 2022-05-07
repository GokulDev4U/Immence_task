import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


const MyProfile = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography variant="h5">MyProfile</Typography>
                    <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                        <Avatar alt="Remy Sharp" sx={{ width: 80, height: 80 }} src="https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
                        <Typography variant="h5">Anna Alvarado</Typography>
                        <Typography variant="h6" sx={{ maxWidth: 200 }}></Typography>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        {/* <Typography variant="h6">Anna Alvarado</Typography>
                        <Typography variant="h5"></Typography> */}

                    </Stack>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
    );
};

export default MyProfile;