import React from 'react';
import Input from './components/Input';
import Result from './components/Result';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from './store';
import {
  selectCurrentWordIndex,
  selectHistory,
  selectIsTyping,
  selectLoading,
  setCurrentWordIndex,
} from './store/features/search/searchSlice';
import Loader from './components/Loader';
import arrowLeft from './assets/arrow-left.png';
import arrowRight from './assets/arrow-right.png';

const App = () => {
  const isTyping = useAppSelector(selectIsTyping);
  const isLoading = useAppSelector(selectLoading);
  const currentWordIndex = useAppSelector(selectCurrentWordIndex);
  const history = useAppSelector(selectHistory);

  const dispatch = useAppDispatch();

  const handlePreviousClick = () => {
    if (currentWordIndex > 0) {
      dispatch(setCurrentWordIndex(currentWordIndex - 1));
    }
  };

  const handleNextClick = () => {
    dispatch(setCurrentWordIndex(currentWordIndex + 1));
  };

  return (
    <Container>
      <h1>What does it mean?</h1>
      <div>
        <Icon
          src={arrowLeft}
          alt="previous-word"
          onClick={handlePreviousClick}
          disabled={currentWordIndex === 0 || currentWordIndex === -1}
        />
        <Input />
        <Icon
          src={arrowRight}
          alt="next-word"
          onClick={handleNextClick}
          disabled={
            currentWordIndex === -1 || currentWordIndex >= history.length
          }
        />
      </div>
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

const Icon = styled.img<{ disabled: boolean }>((props) => ({
  opacity: props.disabled ? 0.4 : 1,
  width: '25px',
  height: '25px',
  margin: '0 10px',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
}));

export default App;
