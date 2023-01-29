import styled from '@emotion/styled';
import React from 'react';
import typing from '../assets/typing.png';

const Info = () => {
  return (
    <Container data-testid="info">
      <img src={typing} alt="typing" />
      <p>Type something...</p>
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',

  '> img': {
    marginTop: '5px',
    width: '35px',
    height: '35px',
  },

  '> p': {
    paddingLeft: '10px',
    fontSize: '20px',
    color: '#f8fcff',
  },
});

export default Info;
