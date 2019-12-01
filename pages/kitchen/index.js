import { Component } from 'react';

import withApollo from '../../lib/withApollo'
import withReduxSaga from '../../lib/withReduxSaga'

import GlobalLayout from '../../layouts/GlobalLayout';
import RecipeList from '../../components/recipe-list/RecipeList';


class Kitchen extends Component {
  render() {
    return (
      <GlobalLayout>
        <RecipeList />
      </GlobalLayout>
    )
  }
}

export default withReduxSaga(withApollo(Kitchen))
