import styled from '@emotion/styled';

//Wraps a Notification with some styling and margins.
export const NotificationWrapper = styled.div`
  font-family: 'Lato', Helvetica;
  margin: 2em 1em 1em 1em;
`;

//Makes a button of type submit and gives it margin.
export const ButtonWrapper = styled.button({
  className: 'button is-primary',
  type: 'submit',
})`
  margin: 1em 1em 1em 1em;
`;

export const Label = styled.label({
  className: 'input-label label',
})`
  font-family: 'Poppins';
  font-size: 2em;
  color: white;
  margin: 1em 1em 0 0.5em;
`;

export const Banner = styled.h2({ className: 'has-text-centered' })`
  font-family: 'Poppins', Helvetica;
  font-size: 8em;
  margin-top: 0em;
`;

export const LinkWrapper = styled.div({ className: 'has-text-centered' })`
  font-family: 'Poppins';
  font-size: 4em;
  margin: 1em 0 1em 0;
`;

//Main Page Header is the hero section of the CEISS landing page.
export const MainPageHeader = styled.div`
  height: 100vh;
  display: grid;
  place-items: center center;
`;
