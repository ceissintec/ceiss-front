import { keyframes } from '@emotion/core';

export const HoverAnimation = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform; translateY(0px);    
  }
`;

export const RotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const IntroAnimation = keyframes`
  from {
    transform: translateY(-500px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
