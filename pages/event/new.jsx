import { Component } from 'react';

import withApollo from '../../lib/withApollo';

import GlobalLayout from '../../layouts/GlobalLayout';
import CreateEvent from '../../components/event/create/CreateEvent';


class New extends Component {
  render() {
    return (
      <GlobalLayout>
        <CreateEvent />
      </GlobalLayout>
    )
  }
}

export default withApollo(New);
