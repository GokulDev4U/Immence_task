import React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SinglePost from '../SinglePost/SinglePost';

const Home = () => {


    return (<>
        <Box sx={{ flexGrow: 1 }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid container spacing={2}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <div className="home-intro-user">
                            <div className="home-intro-user-text">
                                <Typography variant="h2">hello</Typography>
                                <Typography variant="h3">Alvarado</Typography>
                            </div>
                            <div className="home-intro-user-image">
                                <Avatar alt="Remy Sharp" src="https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
                            </div>
                        </div>
                        <Link to='/conversation'>
                            <input type="text" placeholder='search friend' />
                        </Link>
                        <SinglePost />
                        <SinglePost />
                    </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
                <
        </Box>
    </>
    );
};

export default Home;;