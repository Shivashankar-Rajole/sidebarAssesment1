import React from 'react';
import { useStyles } from '../static/MiniDrawerStyles';
import { Typography } from '@material-ui/core';

export const Home = () => {
    const { toolbar } = useStyles;
    return (
        <React.Fragment>
            <div className={toolbar} />
            <Typography paragraph>
                This Is Home Page
            </Typography>        
        </React.Fragment>
    );
}