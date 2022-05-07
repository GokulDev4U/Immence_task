import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Users } from "../../data/users";

const Conversation = () => {
    const [query, setQuery] = useState("");

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="search friend" variant="standard" onChange={(e) => setQuery(e.target.value.toLowerCase())} />
                    </Box>
                    <Box>
                        {Users.filter((asd) =>
                            asd.first_name.toLowerCase().includes(query)
                        ).map((user) => (
                            <li className="listItem" key={user.id}>
                                {user.first_name}
                            </li>
                        ))}
                    </Box>

                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
    );
};

export default Conversation;