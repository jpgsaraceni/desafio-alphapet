import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

function RedefinePassword() {
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
                Para continuar, verifique a senha temporária enviada para seu
                e-mail, e defina uma nova senha.
            </h1>
            <input type="text" placeholder="Senha temporária" />
            <input type="password" placeholder="Nova senha" />
            <input type="password" placeholder="Confirmar senha" />
            <button
                type="submit"
                className="enter-btn"
                onClick={() => navigateToHome()}
            >
                Redefinir
            </button>
            <button
                type="button"
                className="return-btn"
                onClick={() => navigateToLogin()}
            >
                Voltar para login
            </button>
        </Container>
    );
}

export default RedefinePassword;
