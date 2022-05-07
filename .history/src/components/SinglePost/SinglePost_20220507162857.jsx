import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ImageAspectRatio } from '@mui/icons-material';

const SinglePost = ({ post }) => {
    const { img, name, post_time } = post;
    return (
        <Card sx={{ maxWidth: 345, marginTop: 4 }}>
            <CardMedia
                component="img"
                height="194"
                image={img}
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
                title={name}
                subheader={post_time}
            />
        </Card>
    );
};

export default SinglePost;