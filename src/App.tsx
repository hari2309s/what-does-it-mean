import React from 'react';
import Input from './components/Input';
import Result from './components/Result';
import styled from '@emotion/styled';
import { useAppSelector } from './store';
import { selectLoading } from './store/features/search/searchSlice';
import Loader from './components/Loader';

const App = () => {
  const isTyping = useAppSelector(selectLoading);
  const isLoading = useAppSelector(selectLoading);

  return (
    <Container>
      <h1>What does it mean?</h1>
      <Input />
      {(isTyping || isLoading) && <Loader />}
      <Result />
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '10px',

  '> h1': {
    color: '#39434c',
    fontWeight: 600,
  },

  '@media (max-width: 600px)': {
    '> h1': {
      fontWeight: 400,
    },
  },

  '@media (max-width: 400px)': {
    '> h1': {
      fontWeight: 300,
    },
  },
});

export default App;
