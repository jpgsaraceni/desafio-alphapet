import styled from 'styled-components';

export const Container = styled.div`
    width: 400px;
    height: 500px;
    max-width: 80vw;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: #1f8fff;

    h1 {
        text-transform: capitalize;
        margin: 0;
        padding: 0;
    }

    .service-image {
        width: 80%;
    }

    p {
        font-size: 20px;
    }

    .schedule-button {
        font-weight: bolder;
        width: 50%;
        margin-top: 20px;
        padding: 10px;
        font-size: 30px;
        background: #1f8fff;
        border-radius: 5px;
    }

    .schedule-button:hover {
        color: #ffb32b;
    }
`;
