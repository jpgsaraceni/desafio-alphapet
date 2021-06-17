/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const PetsContext = createContext({});

export const PetsProvider = props => {
    // api requests and responses for the list and info of registered pets.
    const [pets, setPets] = useState([]);

    useEffect(() => {
        api.get(`/pet`).then(data => setPets(data.data));
    }, []);

    const getPets = () => {
        api.get(`/pet`).then(data => setPets(data.data));
    };

    const removePet = pet => {
        api.delete(`/pet/${pet.id}`);
        getPets();
    };

    return (
        <PetsContext.Provider
            value={{
                pets,
                getPets,
                removePet,
            }}
        >
            {props.children}
        </PetsContext.Provider>
    );
};
