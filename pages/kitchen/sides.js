import React, { Component } from 'react'

import withApollo from '../../lib/withApollo'
import withReduxSaga from '../../lib/withReduxSaga'

import GlobalLayout from '../../layouts/GlobalLayout';


class Sides extends Component {
  render() {
    return (
      <GlobalLayout></GlobalLayout>
    )
  }
}

export default withReduxSaga(withApollo(Sides))
