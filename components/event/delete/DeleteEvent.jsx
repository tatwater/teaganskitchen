import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


function DeleteEvent({ router, deleteEvent }) {
  function handleDelete() {
    deleteEvent(router.asPath.split('/').pop());

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

const deleteEvent = gql`
  mutation deleteEvent($url: String!) {
    deleteEvent(where: { url: $url }) {
      url
    }
  }
`;

export default graphql(deleteEvent, {
  props: ({ mutate }) => ({
    deleteEvent: (url) => {
      mutate({
        variables: { url },
      });
    }
  }),
})(withRouter(DeleteEvent));
