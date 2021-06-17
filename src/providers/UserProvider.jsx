/* eslint-disable react/destructuring-assignment */
import React, { createContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = props => {
    // users can be added only in each session. They are not on the server (json.server for development), local storage or cookies.
    const users = [
        {
            // test user only for development.
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
