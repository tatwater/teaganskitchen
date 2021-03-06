import Link from 'next/link';
import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


function Header({ router: { asPath }, data: { error, recipe } }) {
  if (error)
    return (
      <div>Error retrieving recipe { console.log(error) }</div>
    );
  if (recipe)
    return (
      <header>
        <h1>{ recipe.name }</h1>
        <p>
          URL: { recipe.url }
        </p>
        <Link href={ '/recipe/edit/' + recipe.url }>
          <a>Edit</a>
        </Link>
      </header>
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
})(Header);

export default withRouter(ComponentWithMutation);
