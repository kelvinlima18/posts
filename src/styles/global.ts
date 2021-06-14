import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #EFEFEF;
    color: #1A2027;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Saira', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
