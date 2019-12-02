import styled from 'styled-components';


export const Container = styled.header`
  display: flex;
    align-items: center;
    flex-direction: column;
  padding: 60px 20px 40px;
`;
export const Name = styled.h1`
  margin-bottom: 10px;
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
  margin-top: 20px;
  text-align: center;
  width: 360px;
`;
