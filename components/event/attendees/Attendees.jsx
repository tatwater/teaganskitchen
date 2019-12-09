import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

import { respond } from '../../../lib/event/actions';

import { Container, Header, RSVP, Responses, Respond, Lists, Group, Person, Status, Pronouns } from './styles';


function Attendees({ response, dispatch }) {
  return (
    <Container>
      <Header>
        <h2>Who's coming?</h2>
        <RSVP>
          <h3>RSVP</h3>
          { response === '' &&
            <p>Hey Sarah, let the group know<br />if you can make it!</p>
          }
          { response === 'going' &&
            <p>Hooray! I'm already<br/ >excited to see you :)</p>
          }
          {/* { response === 'maybe' &&
            <p>Fingers crossed that<br />schedules work out!</p>
          } */}
          { response === 'no' &&
            <p>Sorry you can't make it :(<br />We'll miss you!</p>
          }
          <Responses>
            <Respond
              onClick={() => dispatch(respond('going')) }
              response={ response }
              status='going'
            >
              <FontAwesomeIcon icon={['fal', 'check']} />
              I'm in
            </Respond>
            {/* <Respond
              onClick={() => dispatch(respond('maybe')) }
              response={ response }
              status='maybe'
            >
              <FontAwesomeIcon icon={['far', 'tilde']} />
              Maybe
            </Respond> */}
            <Respond
              onClick={() => dispatch(respond('no')) }
              response={ response }
              status='no'
            >
              <FontAwesomeIcon icon={['fal', 'times']} />
              Next Time
            </Respond>
          </Responses>
        </RSVP>
      </Header>
      <Lists>
        <Group>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Alex M</h4>
            <Pronouns>He/him/his</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Ali H</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Andrew H</h4>
            <Pronouns>He/him/his</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Galen M</h4>
            <Pronouns>He/him/his</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Hayley B</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Kaya M</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Kelsie A</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Megan M</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Rachel O</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Roxanne L</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Sam C</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'times']} />
            </Status>
            <h4>Sydney H</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='going'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Teagan A</h4>
            <Pronouns>He/him/his</Pronouns>
          </Person>
        </Group>
        <Group>
          <Person>
            <Status status='maybe'>
              <FontAwesomeIcon icon={['fas', 'tilde']} />
            </Status>
            <h4>Alba E</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='maybe'>
              <FontAwesomeIcon icon={['fas', 'tilde']} />
            </Status>
            <h4>Alberto R</h4>
            <Pronouns>He/him/his</Pronouns>
          </Person>
          <Person>
            <Status status='maybe'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Amelia F</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='maybe'>
              <FontAwesomeIcon icon={['fas', 'tilde']} />
            </Status>
            <h4>Claudia B</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status status='maybe'>
              <FontAwesomeIcon icon={['fas', 'check']} />
            </Status>
            <h4>Michael D</h4>
            <Pronouns>He/him/his</Pronouns>
          </Person>
        </Group>
        <Group>
          <Person>
            <Status>
              <FontAwesomeIcon icon={['fas', 'question']} />
            </Status>
            <h4>Mayah FB</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
          <Person>
            <Status>
              <FontAwesomeIcon icon={['fas', 'question']} />
            </Status>
            <h4>Ross J</h4>
            <Pronouns>He/him/his</Pronouns>
          </Person>
          <Person>
            <Status>
              <FontAwesomeIcon icon={['fas', 'question']} />
            </Status>
            <h4>Taylor H</h4>
            <Pronouns>He/him/his</Pronouns>
          </Person>
          <Person>
            <Status>
              <FontAwesomeIcon icon={['fas', 'question']} />
            </Status>
            <h4>Tori C</h4>
            <Pronouns>She/her/hers</Pronouns>
          </Person>
        </Group>
        <Group>
          <Person>
            <Status status='no'>
              <FontAwesomeIcon icon={['fas', 'times']} />
            </Status>
            <h4>David CS</h4>
            <Pronouns>He/him/his</Pronouns>
          </Person>
        </Group>
      </Lists>
    </Container>
  );
}

export default connect(state => state.event)(Attendees);
