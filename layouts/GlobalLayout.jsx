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
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Head>
      <Navbar />
      { children }
    </div>
  );
}

export default GlobalLayout;
