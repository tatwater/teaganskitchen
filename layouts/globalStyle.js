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

  body {
    color: ${({ theme }) => theme.colors.textPrimary };
    font-family: 'Sofia Pro';
    font-size: 18px;
    font-weight: 500;
    height: 100vh;
    width: 100vw;
  }

  h1 {
    font-size: 54px;
    font-weight: 900;
    margin: 0;
  }
  h2 {
    font-size: 32px;
    font-weight: 900;
    margin: 0 0 66px 0;
    position: relative;

    &::after {
      background: ${({ theme }) => theme.colors.yellow };
      content: '';
      height: 6px;
      position: absolute;
        bottom: -26px;
        left: 0;
      width: 80px;
    }
  }
  h3 {
    color: ${({ theme }) => theme.colors.brandPrimary };
    font-size: 22px;
    font-weight: 900;
    margin: 0;
  }
  h4 {
    font-size: 18px;
    font-weight: 800;
    margin: 0 0 8px;
  }

  p {
    line-height: 1.33em;
    margin: 0;

    & + p {
      margin-top: 1em;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
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
