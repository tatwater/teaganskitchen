import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  height: 100vh;
`;
export const Message = styled.div`
  background: ${({ theme }) => theme.colors.brandPrimary };
  color: #fff;
  display: flex;
    align-items: center;
    flex-basis: 50%;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;

  h1 {
    font-size: 120px;
  }
`;
export const Form = styled.form`
  display: flex;
    align-items: center;
    flex-basis: 50%;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;

  h3 {
    margin-bottom: 30px;
  }
`;
export const FieldWrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.textSecondary };
  font-weight: 400;
  height: 16px;
  position: absolute;
    top: 50%;
    left: 16px;
  transform: translate(0, -50%);
  transition: font-size .2s ease, top .2s ease;
`;
export const Input = styled.input`
  background: ${({ theme }) => theme.colors.linkActive };
  border: none;
  border-radius: 3px;
  height: 48px;
  outline: none;
  padding: 16px 16px 0;
  width: 300px;

  &:focus + ${ Label }
  ${({ hasContent }) => hasContent && ', & + ' + Label } {
    font-size: 14px;
    top: calc(50% - 10px);
  }
`;
