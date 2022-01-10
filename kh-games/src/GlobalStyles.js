import { createGlobalStyle } from "styled-components";

// Add colors, fonts, and backgrounds colors!

export const GlobalStyle = createGlobalStyle`


:root {
--maxWidth: 1280px;
--fontSuperBig: 2.5rem;
--fontBig: 1.7rem;
--fontMed: 1.3rem;
--fontSmall: 1rem;

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

h1 {
    font-size: 2rem;
    font-weight: 600;
}

h3 {
    font-size: 1.2rem;
    font-weight: 600;
}

p {
    font-size: var(--fontSmall);
}

}

`;
