import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useUsers } from '../../hooks/useUsers';

import { Container } from './styles';

function SignUp() {
    const { addUser } = useUsers();

    const history = useHistory();
    const [name, setName] = useState();
    const [noName, setNoName] = useState(false);
    const [email, setEmail] = useState();
    const [noEmail, setNoEmail] = useState(false);
    const [password, setPassword] = useState();
    const [noPassword, setNoPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState();
    const [noConfirmPassword, setNoConfirmPassword] = useState(false);
    const [passwordsNotMatching, setPasswordsNotMatching] = useState(false);
    // const [emailNotAvailable, setEmailNotAvailable] = useState(false);

    // function checkAvailability() {
    //     users.forEach(user => {
    //         console.log(user.email);
    //         if (user.email === email) {
    //             console.log('same');
    //             setEmailNotAvailable(true);
    //         } else {
    //             setEmailNotAvailable(false);
    //         }
    //     });
    // }

    function navigateToHome() {
        if (
            (name, email, password, confirmPassword) &&
            password === confirmPassword
        ) {
            addUser({ name, email, password });
            history.push(`/home`);
        }
        if (!name) {
            setNoName(true);
        }
        if (!email) {
            setNoEmail(true);
        }
        if (!password) {
            setNoPassword(true);
        }
        if (!confirmPassword) {
            setNoConfirmPassword(true);
        }
        if ((password, confirmPassword) && password !== confirmPassword) {
            setPasswordsNotMatching(true);
        }
    }

    function navigateToLogin() {
        history.push(`login`);
    }

    return (
        <Container>
            <h1>
                Seja bem-vindo(a) ao AlphaPet! Para começar, preencha todos os
                campos abaixo.
            </h1>
            <input
                type="text"
                placeholder="Seu nome"
                onChange={event => {
                    setName(event.target.value);
                    setNoName(false);
                }}
            />
            {noName && <span>Informe seu nome!</span>}
            <input
                type="e-mail"
                placeholder="E-mail"
                onChange={event => {
                    setEmail(event.target.value);
                    // checkAvailability();
                    setNoEmail(false);
                }}
            />
            {noEmail && <span>Informe seu email!</span>}
            {/* {emailNotAvailable && <span>E-mail já está cadastrado!</span>} */}
            <input
                type="password"
                placeholder="Senha"
                onChange={event => {
                    setPassword(event.target.value);
                    setNoPassword(false);
                }}
            />
            {noPassword && <span>Informe sua senha!</span>}
            <input
                type="password"
                placeholder="Confirmar senha"
                onChange={event => {
                    setConfirmPassword(event.target.value);
                    setNoConfirmPassword(false);
                }}
            />
            {noConfirmPassword && <span>Confirme sua senha!</span>}
            {passwordsNotMatching && <span>Senhas não conferem!</span>}
            <button
                type="button"
                className="enter-btn"
                onClick={() => navigateToHome()}
            >
                Cadastrar
            </button>
            <button
                type="button"
                className="return-btn"
                onClick={() => navigateToLogin()}
            >
                Voltar
            </button>
        </Container>
    );
}

export default SignUp;
