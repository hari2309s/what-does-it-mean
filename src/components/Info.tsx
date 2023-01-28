import styled from '@emotion/styled';
import React from 'react';

const Info = () => {
  return (
    <Container>
      <p>Type something...</p>
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',

  '> p': {
    fontSize: '20px',
    color: '#fffdfa',
  },
});

export default Info;
