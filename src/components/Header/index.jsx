import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';
import logout from '../../assets/images/logout.svg';
// import { useNavigate } from '../../hooks/useNavigate';

function Header() {
    // use props to change remove cursor: pointer when on the page the button takes to.
    const history = useHistory();

    function navigateToHome() {
        history.push(`/home`);
    }

    function navigateToLogIn() {
        history.push(`/login`);
    }

    function navigateToAppointments() {
        history.push(`/appointments`);
    }

    function navigateToPets() {
        history.push(`/pets`);
    }
    // const navigateToLogIn = useNavigate();

    return (
        <Container>
            <div className="right">
                <button
                    type="button"
                    className="right home-button"
                    onClick={() => navigateToHome()}
                >
                    <img
                        className="logo"
                        src={logo}
                        alt="Logo da alphapet. Casinha com desenho de uma pegada de cachorro dentro, e alphapet escrito embaixo."
                    />
                </button>
            </div>
            <div className="left">
                <button
                    type="button"
                    className="navigate-button"
                    onClick={() => navigateToAppointments()}
                >
                    Meus agendamentos
                </button>
                <button
                    type="button"
                    className="navigate-button"
                    onClick={() => navigateToPets()}
                >
                    Meus pets
                </button>
                <button
                    type="button"
                    className="navigate-button"
                    onClick={() => navigateToLogIn()}
                >
                    <img
                        className="logout-button"
                        src={logout}
                        alt="Log out icon"
                    />
                    Sair
                </button>
            </div>
        </Container>
    );
}

export default Header;
