import Link from 'next/link';
import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, Name, EditButton, Description } from './styles';


function Header({ router: { asPath }, data: { error, event } }) {
  if (error)
    return (
      <div>Error retrieving event { console.log(error) }</div>
    );
  if (event)
    return (
      <Container>
        <Name>{ event.name }</Name>
        <Link href={ '/event/edit/' + event.url }>
          <EditButton>
            <FontAwesomeIcon icon={['fas', 'pencil']} />
            Edit
          </EditButton>
        </Link>
        <Description>{ event.description }</Description>
      </Container>
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
      description
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
})(Header);

export default withRouter(ComponentWithMutation);
