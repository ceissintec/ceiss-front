import styled from '@emotion/styled';
import { IntroAnimation } from '../animations';

const Hero = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  /* grid-gap: -8rem; */
  justify-content: center;
  align-items: center;
  background-color: #161719;
  color: white;
  text-align: center;
  font-size: 6em;
  font-weight: bold;
  animation: ${IntroAnimation} 2s ease;
`;

export default Hero;
