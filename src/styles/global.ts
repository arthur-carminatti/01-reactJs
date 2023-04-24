import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:focus {
    outline: transparent;
    box-shadow: 0 0 0 2px var(--green-500);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--gray-900);
    color: var(--gray-300);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`

