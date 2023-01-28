import styled from '@emotion/styled';
import React from 'react';
import typing from '../assets/typing.png';

interface InfoProps {
  show: boolean;
}

const Info = ({ show }: InfoProps) => {
  return (
    <Container show={show}>
      <img src={typing} alt="typing" />
      <p>Type something...</p>
    </Container>
  );
};

const Container = styled.div<InfoProps>((props) => ({
  display: props.show ? 'flex' : 'none',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  opacity: props.show ? 1 : 0,
  transition: 'opacity 0.6s linear',

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
}));

export default Info;
