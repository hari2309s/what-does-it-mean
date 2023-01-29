import styled from '@emotion/styled';
import React from 'react';
import notFound from '../assets/not-found.png';

const NotFound = () => {
  return (
    <Container data-testid="not-found">
      <img src={notFound} alt="not-found" />
      <p>{`We couldn't find meaning for the word! Type something new...`}</p>
    </Container>
  );
};

const Container = styled.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  overflow: 'hidden',

  '> img': {
    width: '80px',
    height: '80px',
  },

  '> p': {
    width: '50%',
    color: '#f8fcff',
  },
});

export default NotFound;
