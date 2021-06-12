import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: gray;
    --secondary: white;
    --third: black;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    background: #B2D6FF;
    color: #333333;
  }
  body, input, button {
    font: 400 16px sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
