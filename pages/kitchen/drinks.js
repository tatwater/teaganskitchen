import React, { Component } from 'react'

import withApollo from '../../lib/withApollo'
import withReduxSaga from '../../lib/withReduxSaga'

import GlobalLayout from '../../layouts/GlobalLayout';
import RecipeList from '../../components/recipe/list/RecipeList';


class Drinks extends Component {
  render() {
    return (
      <GlobalLayout>
        <RecipeList typeFilters={['drink']} />
      </GlobalLayout>
    )
  }
}

export default withReduxSaga(withApollo(Drinks))
