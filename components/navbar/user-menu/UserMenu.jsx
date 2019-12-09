import { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper, Button, Overlay, Container, LinkGroup } from './styles';


class UserMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    }

    this.toggleShowMenu = this.toggleShowMenu.bind(this);
  }

  toggleShowMenu() {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    const { showMenu } = this.state;
    const { homePath, isAuth } = this.props;

    return (
      <Wrapper>
        <Button
          active={ showMenu }
          isAuth={ isAuth }
          onClick={() => this.toggleShowMenu() }
          type='button'
        >
          {/* <Photo
            alt='Avatar'
            src='/teagan.jpg'
          /> */}
          <FontAwesomeIcon icon={['fas', 'caret-down']} />
        </Button>
        { showMenu &&
          <div>
            <Overlay
              onClick={() => this.toggleShowMenu() }
              type='button'
            />
            <Container>
              <LinkGroup>
                <Link href='/event/new'>
                  <a onClick={() => this.toggleShowMenu() }>
                    <FontAwesomeIcon icon={['far', 'calendar-plus']} />
                    New Event
                  </a>
                </Link>
                <Link href='/recipe/new'>
                  <a onClick={() => this.toggleShowMenu() }>
                    <FontAwesomeIcon icon={['far', 'file-plus']} />
                    New Recipe
                  </a>
                </Link>
              </LinkGroup>
              <Link href=''>
                <a onClick={() => this.toggleShowMenu() }>
                  <FontAwesomeIcon icon={['far', 'user']} />
                  My profile
                </a>
              </Link>
              <Link href='/signin'>
                <a onClick={() => this.toggleShowMenu() }>
                  <FontAwesomeIcon icon={['far', 'sign-out']} />
                  Sign out
                </a>
              </Link>
            </Container>
          </div>
        }
      </Wrapper>
    );
  }
}

export default UserMenu;
