import Head from 'next/head';
import styled from 'styled-components';

import { GlobalStyle } from './globalStyle';
import Navbar from '../components/navbar/Navbar';


const Wrapper = styled.div`
  padding-top: 96px;
`;

function GlobalLayout({ children }) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Head>
        <title>Home</title>
        <link
          href='/favicon.ico'
          rel='icon'
        />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <link rel='stylesheet' href='https://use.typekit.net/plj5shr.css' />
      </Head>
      <Navbar />
      { children }
    </Wrapper>
  );
}

export default GlobalLayout;
