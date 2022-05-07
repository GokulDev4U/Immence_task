import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Users } from "../../data/userdata";
import ConversationList from '../ConversationList/ConversationList';
import Typography from '@mui/material/Typography';

const MyProfile = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography variant="h5">Conversation</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="search friend" variant="standard" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                    </Box>
                    <Box sx={{ marginTop: 4 }}>
                        {Users.filter((user) =>
                            user.name.toLowerCase().includes(query)
                        ).map((user) => (
                            <Box className="listItem" key={user.id}>
                                <ConversationList name={user.name} status={user.status} img={user.img} />
                            </Box>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
    );
};

export default MyProfile;