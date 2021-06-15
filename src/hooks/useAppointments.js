import { useContext } from 'react';
import { AppointmentsContext } from '../providers/AppointmentsProvider';

export function useAppointments() {
    const context = useContext(AppointmentsContext);

    return context;
}
