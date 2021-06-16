/* eslint-disable react/destructuring-assignment */
import React, { createContext } from 'react';

export const UserContext = createContext({});

// import { Container } from './styles';

export const UserProvider = props => {
    const users = [
        {
            id: 1,
            name: 'test',
            password: 'password',
            email: 'test@test.com',
        },
    ];

    function addUser(user) {
        users.push(user);
    }

    return (
        <UserContext.Provider value={{ users, addUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;
