import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthLayout from '../layouts/AuthLayout';
import SignIn from '../components/auth/signin/SignIn';


class Home extends Component {
  render() {
    return (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    );
  }
}

export default connect()(Home);
