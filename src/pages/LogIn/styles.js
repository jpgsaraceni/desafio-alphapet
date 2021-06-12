import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    font-family: 'Ubuntu';

    button {
        background: none;
        border: none;
    }

    button:hover {
        color: #ffb32b;
    }

    .left-side {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffb32b;
    }

    .logo {
        max-width: 40vw;
    }

    .right-side {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .login-box {
        align-self: center;
        align-items: center;
        justify-self: center;
        display: flex;
        flex-direction: column;
        max-width: 50vw;
        /* max-width: 400px; */
        margin-bottom: 20px;
        background: #fff;
        border-radius: 5px;
        padding: 22px 37px 44px 37px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .title {
        font-size: 58px;
        text-align: center;
        margin-bottom: 30px;
        color: #1f8fff;
    }

    input {
        display: flex;
        width: 68%;
        height: 86px;
        padding-left: 20px;
        font-size: 30px;
        background: inherit;
        border: 1px solid #b2d6ff;
        box-sizing: border-box;
    }

    input ~ input {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    input::placeholder {
        font-size: 30px;
        color: #b2d6ff;
    }

    .forgot-password-text {
        font-size: 22px;
    }

    .forgot-password-btn {
        padding-left: 5px;
        font-size: 22px;
        font-weight: bold;
        color: #1f8fff;
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

    .sign-up-caption {
        color: #4f4f4f;
        font-size: 30px;
    }

    .sign-up-btn {
        font-weight: bold;
        color: #1f8fff;
        padding-left: 5px;
        font-size: 30px;
    }
`;
