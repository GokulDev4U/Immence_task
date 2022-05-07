import React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const Home = () => {


    return (<>
        <Grid container spacing={2}>
            <div className="home-intro-user">
                <div className="home-intro-user-text">
                    <Typography variant="h2">hello</Typography>
                    <Typography variant="h3">Alvarado</Typography>
                </div>
                <div className="home-intro-user-image">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
            </div>

        </Grid>
    </>
    );
};

export default Home;;