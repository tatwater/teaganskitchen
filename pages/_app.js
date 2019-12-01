import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { library as fontawesome } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';

import createStore from '../lib/store';
import { theme } from '../layouts/globalStyle';


fontawesome.add(fab, fal, far, fas);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={ store }>
        <ThemeProvider theme={ theme }>
          <Component { ...pageProps } />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
