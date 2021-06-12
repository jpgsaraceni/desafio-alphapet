import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/login" from="/" />
                <Route path="/login" component={LogIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
