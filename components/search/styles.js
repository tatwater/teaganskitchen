import styled from 'styled-components';
import { SearchBox } from 'react-instantsearch-dom';


export const Container = styled.section`
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  height: calc(100vh - (2 * 98px));
  width: 100%;

  [type='search'] {
    border: none;
    outline: none;
  }
`;
export const Header = styled.header`
  display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  max-width: 620px;
  padding: 0 20px;
  width: 100%;
`;
export const CustomSearchBox = styled(SearchBox)`
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary };
  border-radius: 23px;
  display: flex;
  height: 46px;
  margin-top: 20px;
  padding: 2px;
  transition: box-shadow .2s ease;
  width: 100%;

  form {
    display: flex;
      align-items: center;
    width: 100%;
  }
  [type='search'] {
    border-top-right-radius: 21px;
    border-bottom-right-radius: 21px;
    flex-grow: 1;
    height: 42px;
    order: 2;
    padding-top: 2px;
    width: 100%;
  }
  [type='submit'] {
    border-radius: 50%;
    height: 42px;
    order: 1;
    width: 42px;

    svg {
      height: 20px;
    }
  }
  [type='reset'] {
    order: 3;
  }

  &:hover {
    border-color: #fff;
    box-shadow: 0 3px 12px rgba(45, 52, 54, .12);
  }
`;
export const Results = styled.div`
  height: 322px;
`;
