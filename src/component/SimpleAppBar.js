import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Breadcrumb from './Breadcrumb';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '-webkit-fill-available',
      margin: 0,
      paddingLeft: 30,
      background: 'rgba(239, 243, 246, 1)' ,
    },
  }));

export default function SimpleAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit">
                        <Breadcrumb />
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
