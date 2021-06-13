import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import RecoverPassword from '../pages/RecoverPassword';
import RedefinePassword from '../pages/RedefinePassword';
import SignUp from '../pages/SignUp';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact to="/login" from="/" />
                <Route path="/login" component={LogIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/recover" component={RecoverPassword} />
                <Route path="/redefine" component={RedefinePassword} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
