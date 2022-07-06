import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sinzing: border-box;
    color: ${(props) => props.theme.colors.white};
}
html, body, #root{
    max-heigth:100vh;
    max-width:100vw;

    width: 100%;
    heigth:100%
}
*, button, input {
    border: 0;
    background:none;
    font-family: Ubunto, Arial,sans-serif;
}
html{
  //background: gray;
   background: ${(props) => props.theme.colors.primary};
}
`;

export default GlobalStyle;
