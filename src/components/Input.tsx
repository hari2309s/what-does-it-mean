import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import {
  clearMeaning,
  getMeaning,
  selectLoading,
  setTyping,
} from '../store/features/search/searchSlice';

const Input = () => {
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  const [word, setWord] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTyping(true));

    setWord(e.target.value);

    if (e.target.value === '') {
      dispatch(setTyping(false));
      dispatch(clearMeaning({}));
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (word) {
        const words: string[] = word.split(' ');
        dispatch(getMeaning(words[words.length - 1]));
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [dispatch, word]);

  return (
    <StyledInput
      data-testid="search-input"
      type="text"
      placeholder="Type something..."
      value={word}
      onChange={handleInputChange}
      isLoading={isLoading}
    />
  );
};

const StyledInput = styled.input<{ isLoading: boolean }>((props) => ({
  width: '500px',
  height: '75px',
  borderRadius: '5px',
  border: '1px solid #9F86C0',
  outline: 'none',
  fontSize: '30px',
  fontWeight: 300,
  textAlign: 'center',
  color: '#5E548E',
  marginBottom: !props.isLoading ? '35px' : '30px',
}));

export default Input;
