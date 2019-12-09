import styled from 'styled-components';


export const Container = styled.section`
  display: flex;
    justify-content: center;
  margin: 0 auto;
  max-width: 1400px;
`;
export const Track = styled.div`
  display: inline-flex;
    align-items: flex-start;
    ${({ center }) => center && 'justify-content: center;'}
  margin-top: 60px;
  position: relative;
`;
export const Item = styled.a`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 30px rgba(45, 52, 54, .12);
  cursor: pointer;
  padding: 8px;

  & + a {
    margin-left: 40px;
  }
`;
export const Suggest = styled.button`
  background: ${({ theme }) => theme.colors.linkActive };
  border-radius: 8px;
  padding: 8px;
  position: absolute;
    top: 0;
    right: -300px;
`;
export const Photo = styled.div`
  background: ${({ theme }) => theme.colors.linkActive };
  border: 2px dashed ${({ theme }) => theme.colors.borderPrimary };
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.textSecondary };
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  font-size: 16px;
  height: 244px;
  padding: 24px;
  width: 244px;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2em;
  margin: 12px 0 4px;
`;
export const Description = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary };
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25em;
  margin-bottom: 4px;
`;
