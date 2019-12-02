import React, { Component } from 'react'

import withApollo from '../../lib/withApollo'
import withReduxSaga from '../../lib/withReduxSaga'

import GlobalLayout from '../../layouts/GlobalLayout';
import RecipeList from '../../components/recipe/list/RecipeList';


class Mains extends Component {
  render() {
    return (
      <GlobalLayout>
        <RecipeList typeFilters={['main']} />
      </GlobalLayout>
    )
  }
}

export default withReduxSaga(withApollo(Mains))
