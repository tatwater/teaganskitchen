import React, { Component } from 'react';

import GlobalLayout from '../layouts/GlobalLayout';
import Search from '../components/search/Search';


class Home extends Component {
  render() {
    return (
      <GlobalLayout>
        <Search />
      </GlobalLayout>
    );
  }
}

export default Home;
