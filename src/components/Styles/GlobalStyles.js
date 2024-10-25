import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow-x: hidden;
        user-select: none;
    }

    body {
        width: 100vw;
        margin: 0 auto;
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;

        a {
            text-decoration: none;
            color: black;

        }
    }
`   