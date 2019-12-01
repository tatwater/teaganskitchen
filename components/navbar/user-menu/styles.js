import styled from 'styled-components';


export const Wrapper = styled.div`
  margin-right: 12px;
  position: relative;
`;
export const Button = styled.button`
  background: ${({ active, theme }) => active && theme.colors.linkActive };
  border-radius: 50%;
  height: 36px;
  width: 36px;

  svg {
    height: 16px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.linkActive };
  }
`;
export const Photo = styled.img`
  background: ${({ theme }) => theme.colors.linkActive };
  border-radius: 50%;
  height: 36px;
  position: relative;
  width: 36px;
`;
export const Overlay = styled.button`
  cursor: default;
  position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  width: 100%;
`;
export const Container = styled.nav`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 40px rgba(45, 52, 54, .16);
  display: flex;
    flex-direction: column;
  font-size: 14px;
  padding: 2px;
  position: absolute;
    top: 36px;
    left: 50%;
  transform: translate(-50%, 0);
  width: 180px;

  a {
    border-radius: 3px;
    display: flex;
      align-items: center;
    height: 40px;
    padding: 2px 20px 0;
    text-decoration: none;
    transition: background .1s ease;

    svg {
      height: 14px;
      margin-right: 10px;
      position: relative;
        top: -2px;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.linkActive };
    }
  }

  &::after {
    border-right: 10px solid transparent;
    border-bottom: 8px solid #fff;
    border-left: 10px solid transparent;
    content: '';
    height: 0;
    position: absolute;
      top: -6px;
      left: calc(50% - 10px);
    width: 0;
  }
`;
export const LinkGroup = styled.div`
  display: flex;
    flex-direction: column;
  margin-bottom: 5px;
  position: relative;

  &::after {
    background: ${({ theme }) => theme.colors.borderPrimary };
    content: '';
    height: 1px;
    position: absolute;
      bottom: -3px;
      left: 50%;
    transform: translate(-50%, 0);
    width: calc(100% - 14px);
  }
`;
