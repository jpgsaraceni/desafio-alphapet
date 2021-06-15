import styled from 'styled-components';

export const Container = styled.div`
    overflow: scroll;
    overflow-x: hidden;

    main {
        margin: 50px;
    }

    h1 {
        margin: 0 0 10px 0;
        padding-left: 40px;
        text-align: start;
        text-transform: capitalize;
    }

    .box {
        padding: 40px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        border-radius: 5px;
    }

    .description {
        width: 20%;
    }

    form {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .pet,
    .price,
    .date,
    .time {
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 10px 20px 0;
    }

    .label {
        font-size: 24px;
        align-self: center;
    }

    .input-field {
        width: 160px;
        padding: 0;
    }

    .price {
        font-size: 28px;
        justify-content: center;
        color: #ffb32b;
    }

    select,
    input {
        margin-left: 20px;
        font-size: 20px;
        background-color: #b2d6ff;
        border: none;
        width: 50%;
        height: 40px;
    }

    .button-container {
        width: 100%;
        display: flex;
        place-content: center;
    }

    .schedule-button {
        font-weight: bolder;
        width: 200px;
        margin-top: 20px;
        padding: 10px;
        font-size: 30px;
        background: #1f8fff;
        border-radius: 5px;
        justify-content: center;
    }
`;
