import styled from 'styled-components';
import { lighten } from 'polished';


export const Wrapper = styled.div`
  position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  z-index: 100;
`;
export const Overlay = styled.button`
  background: rgba(45, 52, 54, .67);
  cursor: default;
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  width: 100%;
`;
export const Container = styled.nav`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 40px rgba(45, 52, 54, .16);
  display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-areas: 'work work linkedin'
                         'work work github'
                         'work work dribbble'
                         'kitchen yoga instagram'
                         'kitchen yoga spotify'
                         'kitchen yoga footer';
    grid-template-columns: 1fr 1fr 330px;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  font-size: 16px;
  padding: 100px 80px 100px 120px;
  position: absolute;
    top: 48px;
    right: 34px;
    bottom: 48px;
    left: 34px;
`;
export const ToggleButton = styled.button`
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 14px rgba(45, 52, 54, .16);
  font-size: 22px;
  height: 40px;
  position: absolute;
    top: 0;
    left: -20px;
  transform: translate(0, -50%);
  transition: background .1s ease, color .1s ease;
  width: 40px;

  svg {
    height: 22px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.red };
    color: #fff;
  }
`;
export const Work = styled.div`
  background: ${({ theme }) => lighten(0.15, theme.colors.brandPrimary) };
  border-radius: 20px;
  position: relative;
  grid-area: work;
  transition: background .2s ease;

  a {
    position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }

  &:hover {
    background: ${({ theme }) => lighten(0.05, theme.colors.brandPrimary) }
  }
`;
export const Kitchen = styled.div`
  background: ${({ theme }) => lighten(0.15, theme.colors.green) };
  border-radius: 20px;
  position: relative;
  grid-area: kitchen;
  transition: background .2s ease;

  a {
    position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }

  &:hover {
    background: ${({ theme }) => lighten(0.05, theme.colors.green) }
  }
`;
export const Yoga = styled.div`
  background: ${({ theme }) => lighten(0.15, theme.colors.yellow) };
  border-radius: 20px;
  position: relative;
  grid-area: yoga;
  transition: background .2s ease;

  a {
    position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }

  &:hover {
    background: ${({ theme }) => lighten(0.05, theme.colors.yellow) }
  }
`;
export const SocialList = styled.div`
  display: flex;
    flex-direction: column;
  grid-area: social;
  padding: 0 20px;
`;
export const SocialItem = styled.div`
  border: 2px solid #fff;
  border-radius: 12px;
  grid-area: ${({ area }) => area };
  margin-left: 30px;
  position: relative;
  transition: border-color .2s ease;

  a {
    color: inherit;
    display: flex;
      align-items: center;
    padding: 20px 30px;
    position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    text-decoration: none;
  }
  svg {
    height: 24px;
    margin-right: 16px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderPrimary };
  }
`;
export const Title = styled.span`
  color: #fff;
  font-size: 68px;
  font-weight: 700;
  position: absolute;
    bottom: 20px;
    left: 40px;
`;
