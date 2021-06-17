/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AppointmentsContext = createContext({});

export const AppointmentsProvider = props => {
    // api requests and responses for the scheduled appointments.
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        api.get(`/appointment`).then(data => setAppointments(data.data));
    }, []);

    const getAppointments = () => {
        api.get(`/appointment`).then(data => setAppointments(data.data));
    };

    const removeAppointment = appointment => {
        api.delete(`/appointment/${appointment.id}`);
        getAppointments();
    };

    return (
        <AppointmentsContext.Provider
            value={{ appointments, getAppointments, removeAppointment }}
        >
            {props.children}
        </AppointmentsContext.Provider>
    );
};
