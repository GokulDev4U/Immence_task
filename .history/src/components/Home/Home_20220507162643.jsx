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
import { Posts } from '../../data/posts';

const Home = () => {
    return (<>
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>

                <Grid item xs={4}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ marginRight: 28 }}>
                            <Typography variant="h6">Hello!</Typography>
                            <Typography variant="h5">Alvarado</Typography>
                        </Box>
                        <Avatar alt="Remy Sharp" src="https://static.remove.bg/remove-bg-web/a8b5118d623a6b3f4b7813a78c686de384352145/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
                    </Box>

                    <Link to='/conversation'>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                            <TextField id="input-with-sx" label="search friend" variant="standard" />
                        </Box>
                    </Link>
                    {Posts.map((post) => (
                        <Box className="listItem" key={postMessage.id}>
                            <SinglePost />
                        </Box>
                    ))}
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>

        </Box>
    </>
    );
};

export default Home;;