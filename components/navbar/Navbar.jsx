import Link from 'next/link';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { openMainNav } from '../../lib/main-nav/actions';

import Logo from './Logo';
import MainNav from './main-nav/MainNav';
import UserMenu from './user-menu/UserMenu';

import { Container, Home, ToggleButton, SubNav, A, Site, Photo } from './styles';


function Navbar({ router: { pathname }, visible, dispatch }) {
  let shortPathname = pathname.split('/')[1];
  let homePath = '/';

  if (shortPathname === 'kitchen' || shortPathname === 'recipe' || shortPathname === 'event')
    homePath = '/kitchen';
  else if (shortPathname === 'yoga')
    homePath = '/yoga';

  return (
    <Container>
      { visible &&
        <MainNav />
      }
      <Home>
        <ToggleButton
          onClick={() => dispatch(openMainNav())}
          type='button'
        >
          <FontAwesomeIcon icon={['fal', 'bars']} />
        </ToggleButton>
        <Link href={ homePath }>
          <a>
            <Logo />
          </a>
        </Link>
        { homePath === '/kitchen' &&
          <Link href='/kitchen'>
            <Site site='kitchen'>Kitchen</Site>
          </Link>
        }
        { homePath === '/yoga' &&
          <Link href='/yoga'>
            <Site site='yoga'>Yoga</Site>
          </Link>
        }
        { (homePath === '/kitchen' || homePath === '/yoga') &&
          <UserMenu homePath={ homePath } />
        }
        { homePath === '/kitchen' &&
          <Link href='/event/harvest-movie'>
            <A current={ pathname === '/event/harvest-movie' }>
              Harvest Dinner & Movie
            </A>
          </Link>
        }
      </Home>
      { shortPathname === '' &&
        <SubNav>
          <Link href=''>
            <A>LinkedIn</A>
          </Link>
          <Link href=''>
            <A>AngelList</A>
          </Link>
          <Link href=''>
            <A>GitHub</A>
          </Link>
          <Link href=''>
            <A>Dribbble</A>
          </Link>
          <Link href=''>
            <A>Medium</A>
          </Link>
        </SubNav>
      }
      { homePath === '/kitchen' &&
        <SubNav>
          <Link href='/kitchen/mains'>
            <A current={ pathname === '/kitchen/mains' }>
              Mains
            </A>
          </Link>
          <Link href='/kitchen/sides'>
            <A current={ pathname === '/kitchen/sides' }>
              Sides
            </A>
          </Link>
          <Link href='/kitchen/bites'>
            <A current={ pathname === '/kitchen/bites' }>
              Bites
            </A>
          </Link>
          <Link href='/kitchen/breads'>
            <A current={ pathname === '/kitchen/breads' }>
              Breads
            </A>
          </Link>
          <Link href='/kitchen/desserts'>
            <A current={ pathname === '/kitchen/desserts' }>
              Desserts
            </A>
          </Link>
          <Link href='/kitchen/drinks'>
            <A current={ pathname === '/kitchen/drinks' }>
              Drinks
            </A>
          </Link>
        </SubNav>
      }
    </Container>
  );
}

export default connect(state => state.mainNav)(withRouter(Navbar));
