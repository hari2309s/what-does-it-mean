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
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',

  '> img': {
    marginTop: '5px',
    width: '25px',
    height: '25px',
  },

  '> p': {
    paddingLeft: '10px',
    fontSize: '20px',
    color: '#fffdfa',
  },
});

export default Info;
