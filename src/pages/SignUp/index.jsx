import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function SignUp() {
    const history = useHistory();

    function navigateToHome() {
        history.push(`/home`);
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
            <input type="text" placeholder="Seu nome" />
            <input type="e-mail" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirmar senha" />
            <button
                type="submit"
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
