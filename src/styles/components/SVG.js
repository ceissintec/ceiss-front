import styled from '@emotion/styled';
import { HoverAnimation } from '../animations';

const SVG = styled.div`
  position: absolute;
  bottom: ${props => props.y};
  left: ${props => props.x};
  width: 1.5em;
  z-index: 1;
  height: auto;
  animation: ${HoverAnimation} ${props => props.duration} ease infinite
    alternate;
`;

export default SVG;
