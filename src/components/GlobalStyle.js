import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url(<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">);
*{
    margin: 0;
    padding 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
}
body {
    background-color: black;
    color: #6c7983;
    font-size: 1.2rem;
}
`;

export default GlobalStyle;
