import Link from 'next/link';
import { withRouter } from 'next/router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container, EditButton, Description, Calendar, Time, Details } from './styles';


function Header({ router: { asPath }, data: { error, event } }) {
  if (error)
    return (
      <div>Error retrieving event { console.log(error) }</div>
    );
  if (event)
    return (
      <Container>
        <h1>{ event.name }</h1>
        <Calendar>
          <Time>5-10p</Time>
          <img src='/icon-calendar.svg' />
          <Details>
            <h3>November 02, 2019</h3>
            <p>1110 Route 12A Plainfield NH, 03781</p>
          </Details>
        </Calendar>
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
