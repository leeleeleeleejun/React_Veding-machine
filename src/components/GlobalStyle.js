import { createGlobalStyle } from 'styled-components';
//import font from 'https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;1,200;1,300;1,400&display=swap'
const GlobalStyle = createGlobalStyle`
strong {
  font-weight: bold;
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
}
`;

export default GlobalStyle;
