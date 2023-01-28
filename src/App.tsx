import React from 'react';
import Input from './components/Input';
import Result from './components/Result';
import styled from '@emotion/styled';
import { useAppSelector } from './store';
import { selectLoading } from './store/features/search/searchSlice';
import Spinner from './components/Spinner';

const App = () => {
  const isTyping = useAppSelector(selectLoading);
  const isLoading = useAppSelector(selectLoading);

  return (
    <Container>
      <h1>What does it mean?</h1>
      <Input />
      {(isTyping || isLoading) && <Spinner />}
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
    color: '#231942',
    fontWeight: 500,
  },
});

export default App;
