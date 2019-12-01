import styled from 'styled-components';


export const Container = styled.nav`
  display: flex;
    align-items: center;
    justify-content: space-between;
  font-size: 16px;
  height: 96px;
  padding: 0 50px 0 60px;
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
    background: ${({ theme }) => theme.colors.linkActive };
  }
`;
export const Site = styled.a`
  background: ${({ site, theme }) => { switch (site) { case 'kitchen': return theme.colors.green; case 'yoga': return theme.colors.yellow; }}};
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  display: flex;
    align-items: center;
  font-weight: 600;
  height: 24px;
  margin: 0 18px 0 14px;
  padding: 1px 8px 0;
`;
export const SubNav = styled.div`
  display: flex;
    align-items: center;
`;
export const A = styled.a`
  background: ${({ current, theme }) => current ? theme.colors.linkActive : 'transparent' };
  border-radius: 3px;
  cursor: pointer;
  display: flex;
    align-items: center;
  font-weight: 500;
  height: 32px;
  padding: 2px 12px 0;
  transition: background .1s ease;

  &:hover {
    background: ${({ current, theme }) => current ? 'transparent' : theme.colors.linkActive };
  }

  & + a {
    margin-left: 16px;
  }
`;
