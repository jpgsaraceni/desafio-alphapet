import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    padding: 10px 20px;

    h1 {
        text-transform: capitalize;
        margin: 0 auto;
        width: 300px;
        text-align: start;
    }

    .info-section {
        font-size: 30px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        height: 100px;
        width: 100%;

        .tag {
            color: #b2d6ff;
            text-align: start;
        }
        p {
            width: 40%;
        }
    }

    .cancel-btn {
        font-weight: bolder;
        padding: 5px;
        margin: 20px;
        font-size: 30px;
        background: #1f8fff;
        border-radius: 5px;
        :hover {
            color: #ffb32b;
        }
    }
`;
