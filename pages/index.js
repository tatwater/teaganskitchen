import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startClock } from '../lib/clock/actions'
import { countIncrease } from '../lib/count/actions'

import GlobalLayout from '../layouts/GlobalLayout';
// import Header from '../components/recipe/header/Header';


class Home extends Component {
  static async getInitialProps({ ctx: { store } }) {
    store.dispatch(countIncrease());
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }
  
  render() {
    return (
      <GlobalLayout></GlobalLayout>
    );
  }
}

export default connect()(Home);
