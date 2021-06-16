import { useContext } from 'react';
import { PetsContext } from '../providers/PetsProvider';

export function usePets() {
    const context = useContext(PetsContext);

    return context;
}
