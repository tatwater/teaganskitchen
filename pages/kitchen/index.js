import { Component } from 'react';

import withApollo from '../../lib/withApollo'
import withReduxSaga from '../../lib/withReduxSaga'

import GlobalLayout from '../../layouts/GlobalLayout';
import Search from '../../components/search/Search';
import RecipeList from '../../components/recipe/list/RecipeList';


class Kitchen extends Component {
  render() {
    return (
      <GlobalLayout>
        <Search />
        {/* <RecipeList /> */}
      </GlobalLayout>
    )
  }
}

export default withReduxSaga(withApollo(Kitchen))
