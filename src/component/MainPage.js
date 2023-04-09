import React from 'react';
import MiniDrawerContainer from '../container/MiniDrawerContainer';
import { Routing } from './Routing';
import { useStyles } from '../static/MiniDrawerStyles';

function MainPage(props) {
    const classes = useStyles;
    const { openSideBar, toggleHandler } = props;
    
    return (
        <div className={classes.root}>
            <MiniDrawerContainer openSideBar={openSideBar} sideBarClick={toggleHandler} />
            <Routing openSideBar={openSideBar} sideBarClick={toggleHandler} />
        </div>
    );
}

export default MainPage;