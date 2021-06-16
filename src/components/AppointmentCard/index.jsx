import React from 'react';

import { useAppointments } from '../../hooks/useAppointments';

import { Container } from './styles';

function AppointmentCard({ appointment }) {
    const { removeAppointment } = useAppointments();
    return (
        <Container>
            <div className="service">
                <h1>{appointment.name}</h1>
            </div>
            <div className="info-section">
                <p className="name">
                    <span className="tag">Nome do animal: </span>
                    {appointment.petName}
                </p>
                <p className="price">
                    <span className="tag">Valor serviço: </span>
                    R$ {appointment.price},00
                </p>
                <p className="date">
                    <span className="tag">Data: </span>
                    {appointment.date}
                </p>
                <p className="time">
                    <span className="tag">Horário: </span>
                    {appointment.time}:00
                </p>
            </div>
            <div>
                <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => removeAppointment(appointment)}
                >
                    Cancelar
                </button>
            </div>
        </Container>
    );
}

export default AppointmentCard;
