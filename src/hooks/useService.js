import { useContext } from 'react';
import { ServiceContext } from '../providers/ServiceProvider';

export function useService() {
    const context = useContext(ServiceContext);

    return context;
}
