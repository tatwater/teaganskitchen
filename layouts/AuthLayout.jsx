import Head from 'next/head';

import { GlobalStyle } from './globalStyle';
import Navbar from '../components/navbar/Navbar';


function AuthLayout({ children }) {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Sign in</title>
        <link
          href='/favicon.ico'
          rel='icon'
        />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Head>
      <Navbar isAuth />
      { children }
    </div>
  );
}

export default AuthLayout;
