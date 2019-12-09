import styled from 'styled-components';
import { lighten } from 'polished';


export const Container = styled.div`
  display: grid;
    grid-column-gap: 20px;
    grid-template-areas: 'header lists';
    grid-template-columns: 1fr 2fr;
    grid-template-rows: min-content;
  margin: 0 auto;
  max-width: 1240px;
  padding: 80px 20px 40px;
`;
export const Header = styled.div`
  grid-area: header;
  margin-right: 80px;
`;
export const RSVP = styled.div`
  background: ${({ theme }) => theme.colors.linkActive };
  border-radius: 8px;
  display: flex;
    align-items: center;
    flex-direction: column;
  font-size: 14px;
  margin-top: 80px;
  padding: 20px;
  text-align: center;

  p {
    margin-top: 8px;
  }
`;
export const Responses = styled.div`
  display: flex;
  margin: 14px 0 4px;
  padding: 0 20px;
  width: calc(100% + 10px);
`;
export const Respond = styled.button`
  background: ${({ response, status, theme }) => { switch (response) { case 'going': return status === 'going' ? theme.colors.green : 'none'; case 'maybe': return status === 'maybe' ? theme.colors.yellow : 'none'; case 'no': return status === 'no' ? theme.colors.red : 'none'; default: return '#fff' }}};
  border: 1px solid ${({ response, status, theme }) => { switch (response) { case 'going': return status === 'going' ? theme.colors.green : theme.colors.borderPrimary; case 'maybe': return status === 'maybe' ? theme.colors.yellow : theme.colors.borderPrimary; case 'no': return status === 'no' ? theme.colors.red : theme.colors.borderPrimary; default: return '#fff' }}};
  box-shadow: ${({ response, status }) => (response === '' ||response === status) ? '0 2px 6px rgba(45, 52, 54, .12)' : 'none' };
  border-radius: 5px;
  color: ${({ response, status, theme }) => response === status ? '#fff' : theme.colors.textPrimary };
  display: flex;
    flex-basis: 100%;
    flex-direction: column;
    flex-shrink: 1;
  font-weight: 500;
  margin: 0 5px;
  padding: 14px 0 10px;
  transition background .2s ease, border .2s ease, box-shadow .2s ease, color .2s ease;

  svg {
    height: 28px;
    margin-bottom: 8px;
  }

  &:hover {
    background: ${({ status, theme }) => { switch (status) { case 'going': return theme.colors.green;
                                                             case 'maybe': return theme.colors.yellow;
                                                             case 'no': return theme.colors.red; } }};
    border: 1px solid ${({ status, theme }) => { switch (status) { case 'going': return theme.colors.green;
                                                                   case 'maybe': return theme.colors.yellow;
                                                                   case 'no': return theme.colors.red; } }};
    color: #fff;
  }
`;
export const Lists = styled.div`
  grid-area: lists;
`;
export const Group = styled.div`
  display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  margin-bottom: 30px;
  width: calc(100% + 20px);
`;
export const Person = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary };
  border-radius: 3px;
  display: flex;
    align-item: flex-start;
    width: calc((100% - 60px) / 3);
  margin: 0 20px 10px 0;
  padding: 14px 14px 2px 16px;

  h4 {
    flex-grow: 1;
  }
`;
export const Status = styled.div`
  background: ${({ status, theme }) => { switch (status) { case 'going': return theme.colors.green;
                                                           case 'maybe': return theme.colors.yellow;
                                                           case 'no': return theme.colors.red;
                                                           default: return theme.colors.linkActive; } }};
  border-radius: 50%;
  color: #fff;
  display: flex;
    align-items: center;
    justify-content: center;
  height: 16px;
  margin-right: 8px;
  width: 16px;

  svg {
    height: 10px;
  }
`;
export const Pronouns = styled.span`
  color: ${({ theme }) => lighten(.25, theme.colors.textSecondary) };
  font-size: 12px;
  font-weight: 400;
  position: relative;
    top: 3px;
`;
