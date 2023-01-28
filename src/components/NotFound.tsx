import styled from '@emotion/styled';
import React from 'react';
import notFound from '../assets/not-found.png';

interface NotFoundProps {
  show: boolean;
}

const NotFound = ({ show }: NotFoundProps) => {
  return (
    <Container show={show}>
      <img src={notFound} alt="not-found" />
      <p>{`We couldn't find meaning for the word! Type something new...`}</p>
    </Container>
  );
};

const Container = styled.div<NotFoundProps>((props) => ({
  height: '100%',
  display: props.show ? 'flex' : 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  opacity: props.show ? 1 : 0,
  transition: 'opacity 0.8s linear',
  overflow: 'hidden',

  '> img': {
    width: '80px',
    height: '80px',
  },

  '> p': {
    width: '50%',
    color: '#fffdfa',
  },
}));

export default NotFound;
