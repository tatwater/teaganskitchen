import Link from 'next/link';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { theme } from '../../layouts/globalStyle';
import { openMainNav } from '../../lib/main-nav/actions';

import Logo from './Logo';
import MainNav from './main-nav/MainNav';
import UserMenu from './user-menu/UserMenu';

import { Container, Home, ToggleButton, SubNav, A, Site, Photo } from './styles';


function Navbar({ router: { pathname }, isAuth=false, visible, dispatch }) {
  return (
    <Container auth={ isAuth }>
      { visible &&
        <MainNav />
      }
      <Home>
        <ToggleButton
          isAuth={ isAuth }
          onClick={() => dispatch(openMainNav())}
          type='button'
        >
          <FontAwesomeIcon icon={['fal', 'bars']} />
        </ToggleButton>
        <Link href='/'>
          <a>
            <Logo color={ isAuth ? '#fff' : theme.colors.textPrimary } />
          </a>
        </Link>
        <Link href='/'>
          <Site
            site={ isAuth ? 'auth' : 'kitchen' }
          >
            Kitchen
          </Site>
        </Link>
        <UserMenu
          homePath='/'
          isAuth={ isAuth }
        />
        <Link href='/event/harvest-movie'>
          <A current={ pathname === '/event/harvest-movie' }>
            Harvest Dinner & Movie
          </A>
        </Link>
      </Home>
      <SubNav>
        <Link href='/mains'>
          <A current={ pathname === '/mains' }>
            Mains
          </A>
        </Link>
        <Link href='/sides'>
          <A current={ pathname === '/sides' }>
            Sides
          </A>
        </Link>
        <Link href='/bites'>
          <A current={ pathname === '/bites' }>
            Bites
          </A>
        </Link>
        <Link href='/breads'>
          <A current={ pathname === '/breads' }>
            Breads
          </A>
        </Link>
        <Link href='/desserts'>
          <A current={ pathname === '/desserts' }>
            Desserts
          </A>
        </Link>
        <Link href='/drinks'>
          <A current={ pathname === '/drinks' }>
            Drinks
          </A>
        </Link>
      </SubNav>
    </Container>
  );
}

export default connect(state => state.mainNav)(withRouter(Navbar));
