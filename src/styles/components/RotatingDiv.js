import styled from '@emotion/styled';
import { RotateAnimation } from '../animations';

const RotatingDiv = styled.div`
  animation: ${RotateAnimation} infinite ${props => props.duration} linear;
`;

export default RotatingDiv;
