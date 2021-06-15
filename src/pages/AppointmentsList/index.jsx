import React from 'react';

import { useAppointments } from '../../hooks/useAppointments';

import Header from '../../components/Header';
import { Container } from './styles';
import AppointmentCard from '../../components/AppointmentCard';

function AppointmentsList() {
    const { appointments } = useAppointments();

    return (
        <Container>
            <Header />
            {appointments.map(appointment => (
                <AppointmentCard
                    appointment={appointment}
                    key={appointment.id}
                />
            ))}
        </Container>
    );
}

export default AppointmentsList;
