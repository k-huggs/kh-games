import { createGlobalStyle } from "styled-components";

// Add colors, fonts, and backgrounds colors!

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
:root {
--maxWidth: 1280px;
--medWidth: 768px;
--smallWidth: 480px;
--fontSuperBig: 2.5rem;
--fontBig: 1.7rem;
--fontMed: 1.3rem;
--fontSmall: 1rem;
--white: #fff;
--orange: #ffa260; 
--yellow: #e4cb58;

--red: #dd3e54;
--purple: #9796f0;
--green: #A5CC82;
--pink: #CC95C0;
--blue: #7AA1D2;
--brown:#603813;
}

* {
    box-sizing: border-box;
    background: #E7E9BB;
    color: #403B4A;
    font-family: 'PT Mono', monospace;
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
