/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { AppointmentsProvider } from './AppointmentsProvider';
import { ServiceProvider } from './ServiceProvider';

function AppProvider(props) {
    return (
        <AppointmentsProvider>
            <ServiceProvider>{props.children}</ServiceProvider>
        </AppointmentsProvider>
    );
}

export default AppProvider;
