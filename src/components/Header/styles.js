import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    background: #ffb32b;
    padding: 0 20px 0 40px;
    font-family: 'Ubuntu';

    .left {
        height: 100%;
    }

    button {
        background: none;
        border: none;
        padding: 30px;
        height: 100%;
    }

    button ~ button {
        margin-left: 10px;
    }

    button:hover {
        /* background: #ffd32b; */
        /* filter: brightness(10%); */
    }

    .right {
        height: inherit;
        display: flex;
        align-items: center;
        padding: 10px 0;
    }

    .logo {
        height: 80%;
    }
`;
