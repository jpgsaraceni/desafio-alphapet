import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { useService } from '../../hooks/useService';
import { usePets } from '../../hooks/usePets';
import { useAppointments } from '../../hooks/useAppointments';

import Header from '../../components/Header';
import { Container } from './styles';
import api from '../../services/api';

function ScheduleService() {
    let name;
    let price;
    const { id } = useParams();
    const { pets } = usePets();
    const [date, setDate] = useState('2021-06-30');
    const [time, setTime] = useState('09');
    const [petName, setPetName] = useState(pets[0].name);
    const [appointment, setAppointment] = useState();
    const { services } = useService();
    const history = useHistory();
    const { getAppointments } = useAppointments();

    useEffect(() => {
        setAppointment({ date, time, name, petName, price });
    }, [date, time, name, petName, price]);

    function navigateToAppointments() {
        history.push(`/appointments`);
    }

    async function addAppointment() {
        await api.post(`/appointment`, { ...appointment, ownerId: 1 });
        getAppointments();
        navigateToAppointments();
    }

    const serviceId = services.findIndex(element => element.id === Number(id));
    name = services[serviceId].name;
    price = services[serviceId].price;

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
                            <select
                                name="pet"
                                className="input-field"
                                onChange={event =>
                                    setPetName(event.target.value)
                                }
                            >
                                {pets.map(pet => (
                                    <option key={pet.id} value={pet.name}>
                                        {pet.name}
                                    </option>
                                ))}
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
                                <option value="9" defaultValue>
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
                                    addAppointment();
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
