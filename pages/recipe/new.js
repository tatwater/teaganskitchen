import { Component } from 'react';

import withApollo from '../../lib/withApollo';

import GlobalLayout from '../../layouts/GlobalLayout';
import NewRecipe from '../../components/new-recipe/NewRecipe';


class New extends Component {
  render() {
    return (
      <GlobalLayout>
        <NewRecipe />
      </GlobalLayout>
    )
  }
}

export default withApollo(New);
