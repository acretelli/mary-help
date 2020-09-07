import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        list-style: none;
    }
    body {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
    }
    a {
        color: inherit;
    }
    img, p { 
        width: 100%;
    }
    h1, h2, h3 {
        width: 100%;
        margin: 24px auto;
        font-weight: 700;
        color: #8130a2;
    }
    input, button {
        font-family: 'Raleway', sans-serif;
        margin: 8px 16px;
        padding: 8px;
        border-radius: 4px;
        border: none;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
    }
    input {
        width: calc(100% - 32px);
        max-width: 400px;
    }
    button {
        cursor: pointer;
    }
`