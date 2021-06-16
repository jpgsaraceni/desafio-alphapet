import styled from 'styled-components';

export const Container = styled.form`
    font-family: 'Ubuntu';
    margin: 2% auto 2% auto;
    max-width: 600px;

    h1 {
        font-size: 36px;
        width: 100%;
    }

    input {
        height: 72px;
    }

    button:hover {
        color: #ffb32b;
    }

    .enter-btn {
        font-weight: bolder;
        width: 50%;
        margin-top: 20px;
        padding: 10px;
        font-size: 30px;
        background: #1f8fff;
        border-radius: 5px;
    }

    .return-btn {
        background: none;
        margin-top: 10px;
    }

    span {
        color: red;
    }
`;
