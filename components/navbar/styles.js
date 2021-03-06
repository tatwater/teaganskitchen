import styled from 'styled-components';
import { lighten, darken } from 'polished';


export const Container = styled.nav`
  background: ${({ auth }) => auth ? 'none' : '#fff' };
  border-bottom: 1px solid ${({ auth, theme }) => auth ? 'none' : lighten(.05, theme.colors.borderPrimary) };
  display: flex;
    align-items: center;
    justify-content: space-between;
  font-size: 16px;
  height: 96px;
  padding: 0 50px 0 60px;
  position: fixed;
    top: 0;
    right: 0;
    left: 0;
  z-index: 1;
`;
export const Home = styled.div`
  display: flex;
    align-items: center;
  position: relative;

  a svg {
    cursor: pointer;
    vertical-align: bottom;
  }
`;
export const ToggleButton = styled.button`
  border-radius: 50%;
  color: ${({ isAuth }) => isAuth && '#fff' };
  font-size: 22px;
  height: 40px;
  position: absolute;
    top: 50%;
    left: -46px;
  transform: translate(0, -50%);
  transition: background .1s ease;
  width: 40px;

  svg {
    height: 22px;
  }

  &:hover {
    background: ${({ isAuth, theme }) => isAuth ? darken(.025, theme.colors.brandPrimary) : theme.colors.linkActive };
  }
`;
export const Site = styled.a`
  background: ${({ site, theme }) => { switch (site) { case 'kitchen': return theme.colors.green; case 'yoga': return theme.colors.yellow; case 'auth': return '#fff'; }}};
  border-radius: 3px;
  color: ${({ site, theme }) => site === 'auth' ? theme.colors.brandPrimary : '#fff' };
  cursor: pointer;
  display: flex;
    align-items: center;
  font-weight: 600;
  height: 24px;
  margin: 0 4px 0 14px;
  padding: 2px 8px 0;
`;
export const SubNav = styled.div`
  display: flex;
    align-items: center;
`;
export const A = styled.a`
  background: ${({ current, theme }) => current ? theme.colors.linkActive : 'transparent' };
  border: 2px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
    align-items: center;
  font-weight: 500;
  height: 32px;
  padding: 2px 10px 0;
  transition: background .1s ease, border-color .1s ease;

  &:hover {
    background: ${({ current, theme }) => current ? 'transparent' : theme.colors.linkActive };
    border-color: ${({ current, theme }) => current && theme.colors.linkActive };
  }

  & + a {
    margin-left: 16px;
  }
`;
