import styled from 'styled-components';
//Makes a button of type submit and gives it margin.
const ButtonWrapper = styled.button.attrs({
  className: 'button is-primary',
  type: 'submit',
})`
  margin: 1em 1em 1em 1em;
`;

export default ButtonWrapper;
