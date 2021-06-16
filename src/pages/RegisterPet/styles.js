import styled from 'styled-components';

export const Container = styled.div`
    form {
        display: flex;
        flex-direction: row;
        margin: 50px auto;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    input,
    select {
        margin: 15px 50px;
        width: 200px;
        height: 60px;
        border: 1px solid #b2d6ff;
        font-family: inherit;
        color: #333333;
        font-size: 30px;
        padding-left: 20px;
    }

    .register-btn {
        font-weight: bolder;
        width: 50%;
        margin-top: 20px;
        padding: 10px;
        font-size: 30px;
        background: #1f8fff;
        border-radius: 5px;
        :hover {
            color: #ffb32b;
        }
    }

    .default {
        color: #b2d6ff;
    }

    span {
        margin: 5px auto;
        color: #1f8fff;
        font-weight: bolder;
    }
`;
