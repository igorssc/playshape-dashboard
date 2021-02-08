import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
  body{
    background: orange !important;
    font-family: Roboto, Helvetica, sans-serif !important;
    font-weight: 300 !important;
    color: inherit;
  }
`;
