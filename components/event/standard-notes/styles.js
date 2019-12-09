import styled from 'styled-components';


export const Container = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  padding: 60px 20px;
`;
export const PetNote = styled.div`
  border: 2px dashed ${({ theme }) => theme.colors.borderPrimary };
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.textSecondary };
  font-weight: 600;
  margin: 0 auto;
  max-width: 600px;
  padding: 36px 80px 30px;
  position: relative;
  text-align: center;
`;
export const PetIconWrapper = styled.div`
  background: #fff;
  color: ${({ theme }) => theme.colors.brandPrimary };
  height: 46px;
  position: absolute;
    top: -6px;
    left: 50%;
  transform: translate(-50%, -50%);
  width: 46px;
`;
export const PetIcon = styled.div`
  color: ${({ background, theme }) => background ? theme.colors.brandFaded : theme.colors.brandPrimary };
  position: absolute;
    top: ${({ background }) => background && '1px' };
    left: ${({ background }) => background && '2px' };

  svg {
    height: 46px;
  }
`;
export const FAQs = styled.div`
  display: flex;
    justify-content: space-between;
  margin-top: 100px;
`;
export const Lockup = styled.div`
  display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 8px;
    grid-template-areas: 'icon question'
                         'icon answer';
    grid-template-columns: 46px 1fr;
    grid-template-rows: min-content min-content;
  width: 40%;
`;
export const Icon = styled.div`
  grid-area: icon;
`;
export const Question = styled.h3`
  grid-area: question;
`;
export const Answer = styled.p`
  font-size: 14px;
  grid-area: answer;
  line-height: 1.4em;
`;
