import React from 'react';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

function LogIn() {
    return (
        <Container>
            <div className="left-side">
                <img className="logo" src={logo} alt="" />
            </div>
            <div className="right-side">
                <div className="login-box">
                    <p className="title">Já possui cadastro?</p>
                    <form>
                        <input
                            type="e-mail"
                            placeholder="Digite seu e-mail"
                            ref={input => {
                                input.focus();
                            }}
                        />
                        <input type="password" placeholder="Digite sua senha" />
                        <p className="forgot-password-text">
                            Esqueceu sua senha? Clique
                            <button
                                className="forgot-password-btn"
                                type="button"
                            >
                                aqui
                            </button>
                            .
                        </p>
                        <button className="enter-btn" type="submit">
                            Entrar
                        </button>
                    </form>
                </div>
                <p className="sign-up-caption">
                    É novo aqui?
                    <button className="sign-up-btn" type="button">
                        Cadastre-se!
                    </button>
                </p>
            </div>
        </Container>
    );
}

export default LogIn;
