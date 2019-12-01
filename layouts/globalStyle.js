import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';


export const theme = {
  colors: {
    brandPrimary: '#4b7bec',
    brandSecondary: '#ffc048',
    brandFaded: '#c3d3f9',
    textPrimary: '#2d3436',
    textSecondary: '#485460',
    borderPrimary: '#eceff2',
    linkActive: '#f4f6f8',
    highlight: '#ffe5b2',
    red: '#ff5e57',
    green: '#20bf6b',
    yellow: '#ffc048',
  },
}
export const GlobalStyle = createGlobalStyle`
  ${ normalize() }
  
  *, *::before, *::after {
    box-sizing: border-box;
    user-select: none;
  }

  html {
    height: 100vh;
    overflow: hidden;
    width: 100vw;
  }

  body {
    color: ${({ theme }) => theme.colors.textPrimary };
    font-family: 'Sofia Pro';
    font-size: 18px;
    font-weight: 500;
    height: 100vh;
    overflow: scroll;
    width: 100vw;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
      align-items: center;
      justify-content: center;
    outline: none;
    text-align: center;
  }
`;
