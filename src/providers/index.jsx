/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { AppointmentsProvider } from './AppointmentsProvider';
import { PetsProvider } from './PetsProvider';
import { ServiceProvider } from './ServiceProvider';
import { UserProvider } from './UserProvider';

function AppProvider(props) {
    return (
        <UserProvider>
            <PetsProvider>
                <AppointmentsProvider>
                    <ServiceProvider>{props.children}</ServiceProvider>
                </AppointmentsProvider>
            </PetsProvider>
        </UserProvider>
    );
}

export default AppProvider;
