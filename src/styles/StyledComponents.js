import styled from 'styled-components';

//Wraps a Notification with some styling and margins.
export const NotificationWrapper = styled.div`
  font-family: 'Lato', Helvetica;
  margin: 2em 1em 1em 1em;
`;

//Makes a button of type submit and gives it margin.
export const ButtonWrapper = styled.button.attrs({
  className: 'button is-primary',
  type: 'submit',
})`
  margin: 1em 1em 1em 1em;
`;

export const Label = styled.label.attrs({
  className: 'input-label label',
})`
  font-family: 'Poppins';
  font-size: 2em;
  color: white;
  margin: 1em 1em 0 0.5em;
`;
