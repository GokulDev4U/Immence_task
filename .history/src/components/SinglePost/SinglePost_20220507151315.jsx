import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SinglePost = () => {
    return (
        <Card sx={{ maxWidth: 345, marginTop: 20 }}>
            <CardMedia
                component="img"
                height="194"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDlqeoG0MpIdz4PKanv7XY8Kw98kHpaiUNQ&usqp=CAU"
                alt="img"
            />
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Neha Sharma"
                subheader="32 min ago"
            />
        </Card>
    );
};

export default SinglePost;