import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import EditEvent from './EditEvent';


function EditEventContainer({ data: { error, event } }) {
  if (error)
    return (
      <div>Error retrieving event { console.log(error) }</div>
    );
  if (event)
    return (
      <EditEvent event={ event } />
    );
  return (
    <div>Loading</div>
  );
}

const event = gql`
  query event($id: String!) {
    event(where: { url: $id }) {
      id
      name
      url
      starred
      description
      startTime
      endTime
    }
  }
`;

const ComponentWithMutation = graphql(event, {
  options: ({ router: { query } }) => ({
    variables: {
      id: query.id,
    },
  }),
  props: ({ data }) => ({
    data,
  }),
})(EditEventContainer);

export default withRouter(ComponentWithMutation);
