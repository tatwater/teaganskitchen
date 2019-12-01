import React, { Component } from 'react'

import withApollo from '../../lib/withApollo'
import withReduxSaga from '../../lib/withReduxSaga'

import { startClock } from '../../lib/clock/actions'

import GlobalLayout from '../../layouts/GlobalLayout';


class Party extends Component {
  componentDidMount() {
    this.props.store.dispatch(startClock())
  }

  render() {
    return (
      <GlobalLayout></GlobalLayout>
    )
  }
}

export default withReduxSaga(withApollo(Party))
