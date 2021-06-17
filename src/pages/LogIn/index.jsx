/* eslint-disable prettier/prettier */
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useUsers } from '../../hooks/useUsers';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

function LogIn() {
    // states that receive the values of the input fields. Set with onChange events.
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // when these states are set to true, an error message appears below the input fields. Set true when validation fails and false with onChange events.
    const [noEmail, setNoEmail] = useState(false);
    const [noPassword, setNoPassword] = useState(false);
    const [showInvalidUserMessage, setShowInvalidUserMessage] = useState(false);

    // receives the list of users from the provider.
    const { users } = useUsers();
    const history = useHistory();

    const navigateToHome = useCallback(() => {
        // checks if the email and password are correct.
        let validUsers = false;
        users.forEach((user) => {
            if (user.email === email) {
                if (user.password === password) {
                    // sets the condition to navigate to home to true.
                    validUsers = true;
                }
            }
        })
        if (email && password && validUsers) {
            history.push(`/home`);
        } if (!email) {
            setNoEmail(true);
        }
        if (!password) {
            setNoPassword(true);
        }
        if (email && password && !validUsers) {
            setShowInvalidUserMessage(true);
        }
    }, [email, password, history, users])

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
                        onChange={event => {
                            setNoEmail(false);
                            setShowInvalidUserMessage(false);
                            setEmail(event.target.value)
                        }}
                    />
                    {noEmail && <span>Informe seu e-mail!</span>}
                    <input type="password" placeholder="Digite sua senha" onChange={event => {
                        setNoPassword(false);
                        setShowInvalidUserMessage(false);
                        setPassword(event.target.value)
                    }} />
                    {noPassword && <span>Informe sua senha!</span>}
                    {showInvalidUserMessage && <span>Usuário ou senha inválido!</span>}
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
                        type="button"
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
