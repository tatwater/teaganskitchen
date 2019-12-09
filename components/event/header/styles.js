import styled from 'styled-components';


export const Container = styled.header`
  display: flex;
    align-items: center;
    flex-direction: column;
  padding: 60px 20px 20px;
`;
export const Calendar = styled.div`
  display: flex;
    align-items: center;
  margin: 20px 0 20px;

  img {
    position: relative;
      top: -6px;
  }
`;
export const EditButton = styled.a`
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary };
  border-radius: 14px;
  cursor: pointer;
  display: flex;
    align-items: center;
  font-size: 14px;
  height: 28px;
  padding: 3px 12px 0;
  transition: background .1s ease;

  svg {
    height: 12px;
    margin-right: 4px;
    position: relative;
      top: -2px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.linkActive };
  }
`;
export const Description = styled.p`
  background: ${({ theme }) => theme.colors.linkActive };
  border-radius: 0 5px 5px 5px;
  filter: drop-shadow(0 1px 2px rgba(45, 52, 54, .16));
  margin-top: 20px;
  padding: 14px 20px;
  position: relative;
  width: 400px;

  &::before {
    content: '';
  }
  &::after {
    border-top: 10px solid ${({ theme }) => theme.colors.linkActive };
    border-left: 8px solid transparent;
    content: '';
    position: absolute;
      top: 0;
      left: -8px;
  }
`;
export const Time = styled.div`
  color: ${({ theme }) => theme.colors.yellow };
  font-size: 42px;
  font-weight: 900;
  margin-right: 28px;
`;
export const Details = styled.div`
  display: flex;
    align-items: flex-start;
    flex-direction: column;
  margin-left: 14px;

  p {
    font-size: 14px;
    margin-top: 4px;
  }
`;
