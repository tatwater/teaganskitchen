import React, { Component } from 'react'

import withApollo from '../lib/withApollo'
import withReduxSaga from '../lib/withReduxSaga'

import { startClock } from '../lib/clock/actions'

import GlobalLayout from '../layouts/GlobalLayout';
// import App from '../../components/App'
// import Header from '../../components/Header'
// import Submit from '../../components/Submit'
// import PostList from '../../components/PostList'


class Kitchen extends Component {
  render() {
    return (
      <GlobalLayout></GlobalLayout>
    )
  }
}

export default withReduxSaga(withApollo(Kitchen))
