import React from 'react';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

function Header() {
    return (
        <Container>
            <div className="right">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="left">
                <button type="button">Meus agendamentos</button>
                <button type="button">Meus pets</button>
                <button type="button">Sair</button>
            </div>
        </Container>
    );
}

export default Header;
