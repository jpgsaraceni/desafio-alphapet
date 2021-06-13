import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function RecoverPassword() {
    const history = useHistory();

    function navigateToRedefinePassword() {
        history.push(`/redefine`);
    }

    function navigateToLogin() {
        history.push(`login`);
    }

    return (
        <Container>
            <h1>
                Informe seu e-mail, e enviaremos uma senha temporária para que
                redefina sua senha.
            </h1>
            <input type="e-mail" placeholder="Email" />
            <button
                type="submit"
                className="enter-btn"
                onClick={() => navigateToRedefinePassword()}
            >
                Enviar senha
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

export default RecoverPassword;
