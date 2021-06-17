import React from 'react';

import { Container } from './styles';

function Modal({ handleClose, show, children }) {
    const showHideClassName = show
        ? 'modal display-block'
        : 'modal display-none';

    return (
        <Container className={showHideClassName}>
            <h1>Modal</h1>
            {children}
            <button type="button" onClick={() => handleClose()}>
                X
            </button>
            <button type="button">Confirmar</button>
        </Container>
    );
}

export default Modal;
