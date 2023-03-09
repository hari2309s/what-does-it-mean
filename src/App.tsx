import React from 'react';
import Input from './components/Input';
import Result from './components/Result';
import styled from '@emotion/styled';
import { useAppDispatch, useAppSelector } from './store';
import {
  selectCurrentIndexInHistory,
  selectHistory,
  selectIsTyping,
  selectLoading,
  setCurrentIndexInHistory,
} from './store/features/search/searchSlice';
import Loader from './components/Loader';
import arrowLeft from './assets/arrow-left.png';
import arrowRight from './assets/arrow-right.png';

const App = () => {
  const isTyping = useAppSelector(selectIsTyping);
  const isLoading = useAppSelector(selectLoading);
  const currentIndexInHistory = useAppSelector(selectCurrentIndexInHistory);
  const history = useAppSelector(selectHistory);

  const dispatch = useAppDispatch();

  const handlePreviousClick = () => {
    if (currentIndexInHistory > 0) {
      dispatch(setCurrentIndexInHistory(currentIndexInHistory - 1));
    } else {
      dispatch(setCurrentIndexInHistory(0));
    }
  };

  const handleNextClick = () => {
    dispatch(setCurrentIndexInHistory(currentIndexInHistory + 1));
  };

  return (
    <Container>
      <h1>What does it mean?</h1>
      <div>
        <Icon
          src={arrowLeft}
          alt="previous-word"
          onClick={handlePreviousClick}
          disabled={currentIndexInHistory === -1}
        />
        <Input />
        <Icon
          src={arrowRight}
          alt="next-word"
          onClick={handleNextClick}
          disabled={
            history.length === 1 ||
            currentIndexInHistory === -1 ||
            currentIndexInHistory === history.length - 1
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
