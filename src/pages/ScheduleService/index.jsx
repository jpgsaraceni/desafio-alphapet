import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useService } from '../../hooks/useService';
import { useAppointments } from '../../hooks/useAppointments';

import Header from '../../components/Header';
import { Container } from './styles';

function ScheduleService() {
    const [date, setDate] = useState('2021-06-30');
    const [time, setTime] = useState('09');
    const { addAppointment } = useAppointments();
    const { id } = useParams();
    const { services } = useService();
    const history = useHistory();

    function navigateToAppointments() {
        history.push(`/appointments`);
    }

    const serviceId = services.findIndex(element => element.id === Number(id));

    return (
        <Container>
            <Header />
            <main>
                <h1>{services[serviceId].name}</h1>
                <div className="box">
                    <p className="description">
                        {services[serviceId].description}
                    </p>
                    <form>
                        <div className="pet">
                            <p className="pet-label label">Pet: </p>
                            <select name="pet" className="input-field">
                                <option value="TEST">TEST</option>
                            </select>
                        </div>
                        <div className="price">
                            Valor: R$ {services[serviceId].price},00
                        </div>
                        <div className="date">
                            <p className="date-label label">Data: </p>
                            <input
                                value={date}
                                type="date"
                                className="input-field"
                                onChange={event => setDate(event.target.value)}
                            />
                        </div>
                        <div className="time">
                            <p className="time-label label">Horário: </p>
                            <select
                                className="input-field"
                                onChange={event => {
                                    setTime(event.target.value);
                                }}
                            >
                                <option value="9" selected>
                                    9:00
                                </option>
                                <option value="10">10:00</option>
                                <option value="13">13:00</option>
                                <option value="15">15:00</option>
                            </select>
                        </div>
                        <div className="button-container">
                            <button
                                type="button"
                                className="schedule-button"
                                onClick={() => {
                                    addAppointment(
                                        services[serviceId].name,
                                        'auau',
                                        services[serviceId].price,
                                        date,
                                        time,
                                    );
                                    navigateToAppointments();
                                }}
                            >
                                Agendar
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </Container>
    );
}

export default ScheduleService;
