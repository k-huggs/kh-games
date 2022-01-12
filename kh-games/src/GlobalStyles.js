import { createGlobalStyle } from "styled-components";

// Add colors, fonts, and backgrounds colors!

export const GlobalStyle = createGlobalStyle`

:root {
--maxWidth: 1280px;
--fontSuperBig: 2.5rem;
--fontBig: 1.7rem;
--fontMed: 1.3rem;
--fontSmall: 1rem;
--white: #fff;
--purple: #a972cb;
--pink: #ef6eae;
--lightPink: #ff7f82; 
--orange: #ffa260; 
--yellow: #e4cb58; 
--green: #8fc866; 
--turq: #19bc8b;
}

* {
    box-sizing: border-box;
    background: hsl(227, 10%, 10%);
    color: #fff;
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

button {
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
  }

`;
