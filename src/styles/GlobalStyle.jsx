import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./fonts.css";

const GlobalStyle = createGlobalStyle`
 ${reset};

 *, *::after, *::before {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

 html {
  font-size: 62.5%;
 }

 body {
  background-color: #dee2e6;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 1.6rem;
 }

 button, input {
  font-family: inherit;
  font-size: inherit;
  border: none;
  outline: none;
  background: transparent;
}

button{
  cursor: pointer;
}

 ::placeholder {
  font-family: inherit;
 }
`;

export default GlobalStyle;
