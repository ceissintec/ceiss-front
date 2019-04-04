import styled from 'styled-components';

export const NotificationWrapper = styled.div`
  font-family: 'Lato', Helvetica;
  margin: 2em 1em 1em 1em;
`;

export const ButtonWrapper = styled.button.attrs({
  className: 'button is-primary',
  type: 'submit',
})`
  margin: 1em 1em 1em 1em;
`;
