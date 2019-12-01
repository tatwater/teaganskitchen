import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


function Header({ id, data: { error, Recipe } }) {
  if (error)
    return (
      <div>Error retrieving recipe</div>
    );
  if (Recipe)
    return (
      <header>
        <h1>{ Recipe.title }</h1>
        <p>
          ID: { Recipe.id }
          <br />
          URL: { Recipe.url }
        </p>
      </header>
    );
  return (
    <div>Loading</div>
  );
}

const recipe = gql`
  query recipe($id: ID!) {
    Recipe(id: $id) {
      id
      title
      url
    }
  }
`;

const HeaderWithMutation = graphql(recipe, {
  options: ({ router: { query } }) => ({
    variables: {
      id: query.id,
    },
  }),
  props: ({ data }) => ({
    data,
  }),
})(Header);

export default withRouter(HeaderWithMutation);
