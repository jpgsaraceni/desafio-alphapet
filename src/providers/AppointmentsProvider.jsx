/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from 'react';

export const AppointmentsContext = createContext({});

export const AppointmentsProvider = props => {
    const [id, setId] = useState(2);
    const [appointments, setAppointmentsObj] = useState([
        {
            id: 1,
            name: 'Serviço',
            pet: 'Cachorro',
            price: '1',
            date: '2021-06-30',
            time: '09',
        },
    ]);

    function addAppointment(name, pet, price, date, time) {
        const copyAppointments = appointments;
        copyAppointments.push({ id, name, pet, price, date, time });
        setAppointmentsObj(copyAppointments);
        setId(id + 1);
    }

    return (
        <AppointmentsContext.Provider value={{ appointments, addAppointment }}>
            {props.children}
        </AppointmentsContext.Provider>
    );
};
