import Link from 'next/link';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { closeMainNav } from '../../../lib/main-nav/actions';

import { Wrapper, Overlay, Container, ToggleButton, Work, Kitchen, Yoga, Title, SocialItem } from './styles';


const MainNav = ({ dispatch }) => (
  <Wrapper>
    <Overlay
      onClick={() => dispatch(closeMainNav())}
      type='button'
    />
    <Container>
      <ToggleButton
        onClick={() => dispatch(closeMainNav())}
        type='button'
      >
        <FontAwesomeIcon icon={['fal', 'times']} />
      </ToggleButton>
      <Work>
        <Link href='https://teaganatwater.com'>
          <a onClick={() => dispatch(closeMainNav())}>
            <Title>Work</Title>
          </a>
        </Link>
      </Work>
      <Kitchen src='/kitchen.jpg'>
        <Link href='/'>
          <a onClick={() => dispatch(closeMainNav())}>
            <Title>Kitchen</Title>
          </a>
        </Link>
      </Kitchen>
      <SocialItem area='linkedin'>
        <Link href=''>
          <a onClick={() => dispatch(closeMainNav())}>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} /> LinkedIn
          </a>
        </Link>
      </SocialItem>
      <SocialItem area='github'>
        <Link href=''>
          <a onClick={() => dispatch(closeMainNav())}>
            <FontAwesomeIcon icon={['fab', 'github']} /> GitHub
          </a>
        </Link>
      </SocialItem>
      <SocialItem area='dribbble'>
        <Link href=''>
          <a onClick={() => dispatch(closeMainNav())}>
            <FontAwesomeIcon icon={['fab', 'dribbble']} /> Dribbble
          </a>
        </Link>
      </SocialItem>
      <SocialItem area='instagram'>
        <Link href=''>
          <a onClick={() => dispatch(closeMainNav())}>
            <FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram
          </a>
        </Link>
      </SocialItem>
      <SocialItem area='spotify'>
        <Link href=''>
          <a onClick={() => dispatch(closeMainNav())}>
            <FontAwesomeIcon icon={['fab', 'spotify']} /> Spotify
          </a>
        </Link>
      </SocialItem>
    </Container>
  </Wrapper>
);

export default connect(state => state.mainNav)(MainNav);
