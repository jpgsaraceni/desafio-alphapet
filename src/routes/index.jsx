import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import RecoverPassword from '../pages/RecoverPassword';
import RedefinePassword from '../pages/RedefinePassword';
import ScheduleService from '../pages/ScheduleService';
import SignUp from '../pages/SignUp';
import AppointmentsList from '../pages/AppointmentsList';

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
                <Route path="/schedule/:id" component={ScheduleService} />
                <Route path="/appointments" component={AppointmentsList} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
