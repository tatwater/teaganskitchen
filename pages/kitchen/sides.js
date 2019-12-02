import React, { Component } from 'react'

import withApollo from '../../lib/withApollo'
import withReduxSaga from '../../lib/withReduxSaga'

import GlobalLayout from '../../layouts/GlobalLayout';
import RecipeList from '../../components/recipe/list/RecipeList';


class Sides extends Component {
  render() {
    return (
      <GlobalLayout>
        <RecipeList typeFilters={['side']} />
      </GlobalLayout>
    )
  }
}

export default withReduxSaga(withApollo(Sides))
