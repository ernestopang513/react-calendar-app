import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { startChecking } from '../components/actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth)
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);
    if(checking){
        return (<h5>Espere...</h5>)
    }
    
    return (
        <Router>
            <div>
                <Switch>



                    <PrivateRoute
                        path = '/'
                        exact
                        component = {CalendarScreen}
                        isAuthenticated = {!!uid}
                    />
                    <PublicRoute
                        path = '/login'
                        exact
                        component = {LoginScreen}
                        isAuthenticated = {!!uid}
                    />

                    <Redirect 
                        to = '/'
                    />
                    
                    
                </Switch>
            </div>     
        </Router>
    )
}
