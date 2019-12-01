import Head from 'next/head';

import { GlobalStyle } from './globalStyle';
import Navbar from '../components/navbar/Navbar';


function GlobalLayout({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Home</title>
        <link
          href='/favicon.ico'
          rel='icon'
        />
      </Head>
      <Navbar />
      { children }
    </div>
  );
}

export default GlobalLayout;
