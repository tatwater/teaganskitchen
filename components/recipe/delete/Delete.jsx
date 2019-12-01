import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


function Delete({ router, deleteRecipe }) {
  function handleDelete() {
    deleteRecipe(router.asPath.split('/').pop());

    router.push('/kitchen');
  }

  return (
    <button
      onClick={() => handleDelete() }
      type='button'
    >
      Delete
    </button>
  );
}

const deleteRecipe = gql`
  mutation deleteRecipe($url: String!) {
    deleteRecipe(where: { url: $url }) {
      url
    }
  }
`;

export default graphql(deleteRecipe, {
  props: ({ mutate }) => ({
    deleteRecipe: (url) => {
      mutate({
        variables: { url },
      });
    }
  }),
})(withRouter(Delete));
