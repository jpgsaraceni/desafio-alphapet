/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { AppointmentsProvider } from './AppointmentsProvider';
import { PetsProvider } from './PetsProvider';
import { ServiceProvider } from './ServiceProvider';

function AppProvider(props) {
    return (
        <PetsProvider>
            <AppointmentsProvider>
                <ServiceProvider>{props.children}</ServiceProvider>
            </AppointmentsProvider>
        </PetsProvider>
    );
}

export default AppProvider;
