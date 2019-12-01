import Link from 'next/link';
import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import EditRecipe from './EditRecipe';


function EditRecipeContainer({ router: { asPath }, data: { error, recipe } }) {
  if (error)
    return (
      <div>Error retrieving recipe { console.log(error) }</div>
    );
  if (recipe)
    return (
      <EditRecipe recipe={ recipe } />
    );
  return (
    <div>Loading</div>
  );
}

const recipe = gql`
  query recipe($id: String!) {
    recipe(where: { url: $id }) {
      id
      name
      url
    }
  }
`;

const ComponentWithMutation = graphql(recipe, {
  options: ({ router: { query } }) => ({
    variables: {
      id: query.id,
    },
  }),
  props: ({ data }) => ({
    data,
  }),
})(EditRecipeContainer);

export default withRouter(ComponentWithMutation);
