import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';


import { Monitor } from '../pages/dashboard/Monitor';
import { Workplace } from '../pages/dashboard/Workplace';
import { Analysis } from '../pages/dashboard/Analysis';
import { Project } from '../projects/Project';
import { ProjectList } from '../projects/ProjectList';
import { List } from '../projects/List';
import { PageNotFound } from '../pages/PageNotFound';
import { FormPage } from '../pages/dashboard/FormPage';
import { Login } from './user/Login'
import { Dashboard } from '../pages/Dashboard';


import { useStyles } from '../static/MiniDrawerStyles';
import clsx from 'clsx';
import SimpleAppBar from './SimpleAppBar';


export const Routing = (props) => {
    const { content, contentShift } = useStyles();
    const { openSideBar } = props;

    return (
        <main className={clsx(content, {
            [contentShift]: openSideBar,
        })}>
            <SimpleAppBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/pages/dashboard' exact component={Dashboard} />
                <Route path='/dashboard/monitor' exact component={Monitor} />
                <Route path='/dashboard/workplace'exact component={Workplace} />
                <Route path='/dashboard/analysis' exact component={Analysis} />
                <Route path='/projects/project' exact component={Project} />
                <Route path='/projects/projectlist' exact component={ProjectList} />
                <Route path='/projects/list' exact component={List} />
                <Route path='/dashboard/formpage' exact component={FormPage} />
                <Route path='/users/login'exact component={Login} />
                
                
                <Route path="*" component={PageNotFound} />

            </Switch>
        </main>);
}