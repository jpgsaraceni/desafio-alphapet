import React from 'react';

import { Container } from './styles';

function AppointmentCard({ appointment }) {
    return (
        <Container>
            <h1>{appointment.name}</h1>
            <p>Nome do animal: {appointment.pet}</p>
            <p>Valor serviço: R$ {appointment.price},00</p>
            <p>Data: {appointment.date}</p>
            <p>Horário: {appointment.time}:00</p>
        </Container>
    );
}

export default AppointmentCard;
