import React from 'react';

import {Home ,SignalWifi1BarLock,StreetviewRounded} from "@material-ui/icons";
import { FormPage } from '../pages/dashboard/FormPage';


const Dashbaord = React.lazy(() => import("../pages/dashboard/Dashboard"));
const Monitor = React.lazy(() => import("../pages/dashboard/Monitor"))
const Workplace = React.lazy(() => import("../pages/dashboard/Workplace"));
const Analysis = React.lazy(() => import("../pages/dashboard/Analysis"));

const Project = React.lazy(() => import("../projects/Project"));
const ProjectList = React.lazy(() => import("../projects/ProjectList"));
const Login = React.lazy(() => import("../component/user/Login"));


export const staticMenu =
    [
      

        {

            name: 'Dashbaord',
            menuDescription: 'Dashboard page',
            path: '/pages/Dashboard',
            component: Dashbaord,
            exact: true,
            icon: <Home />,
          routes: [
                {
                    
                    name: 'Monitor',
                    menuDescription: 'Monitering page',
                    path: '/dashboard/Monitor',
                    component: Monitor,
                },
                {
                   
                    name: 'Workbench',
                    menuDescription: 'Workbench page',
                    path: '/dashboard/Workplace',
                    component: Workplace,
                },
                {
                  
                    name: 'Analysis page',
                    menuDescription: 'Analysis page',
                    path: '/dashboard/Analysis',
                    component: Analysis,
                }
            ]
        },
        {
            
            name: 'Form Page',
            menuDescription: 'Form Page',
            path: '/dashboard/FormPage',
            component: FormPage,
            exact: true,
            icon: <StreetviewRounded />,           
            routes: [
             
                {
                    
                    name: 'Projects',
                    menuDescription: 'Project Page',
                    path: '/projects/project',
                    component: Project,
                    icon: '',
                },
                {
                    
                    name: 'Project List',
                    menuDescription: 'P List',
                    path: '/projects/projectlist',
                    component: ProjectList,
                    icon: '',
                }
            ]
        },
        {
            id: 3,
            name: 'Login Page',
            menuDescription: 'Login Page',
            path: '/users/Login',
            component: Login,
            exact: true,
            icon: <SignalWifi1BarLock />, 
            routes:[]
        }

    ];