/* eslint-disable prettier/prettier */
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

function LogIn() {
    const history = useHistory();

    function navigateToHome() {
        history.push(`/home`);
    }

    function navigateToSignUp() {
        history.push(`signup`);
    }

    function navigateToRecoverPassword() {
        history.push(`recover`);
    }

    return (
        <Container>
            <div className="left-side">
                <img
                    className="logo"
                    src={logo}
                    alt="Logo da alphapet. Casinha com desenho de uma pegada de cachorro dentro, e alphapet escrito embaixo."
                />
            </div>
            <div className="right-side">
                <form>
                    <h1>Já possui cadastro?</h1>
                    <input
                        type="e-mail"
                        placeholder="Digite seu e-mail"
                    // ref={input => {
                    //     input.focus();
                    // }}
                    // is crashing when logs out
                    />
                    <input type="password" placeholder="Digite sua senha" />
                    <p className="forgot-password-text">
                        Esqueceu sua senha? Clique
                        <button
                            className="forgot-password-btn"
                            type="button"
                            onClick={() => navigateToRecoverPassword()}
                        >
                            aqui
                        </button>
                        .
                    </p>
                    <button
                        className="enter-btn"
                        type="submit"
                        onClick={() => navigateToHome()}
                    >
                        Entrar
                    </button>
                </form>
                <p className="sign-up-caption">
                    É novo aqui?
                    <button className="sign-up-btn" type="button" onClick={() => navigateToSignUp()}>
                        Cadastre-se!
                    </button>
                </p>
            </div>
        </Container>
    );
}

export default LogIn;
