import styled from '@emotion/styled';
import React from 'react';

const Loader = () => {
  return <StyledSpan data-testid="loader" />;
};

const StyledSpan = styled.span`
  width: 450px;
  height: 4.8px;
  display: inline-block;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    width: 96px;
    height: 4.8px;
    background: #262d33;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: leftToRight 0.6s ease-in-out infinite alternate;
  }

  @keyframes leftToRight {
    0% {
      left: 0;
      transform: translateX(-1%);
    }
    100% {
      left: 100%;
      transform: translateX(-99%);
    }
  }

  @media (max-width: 600px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`;

export default Loader;
