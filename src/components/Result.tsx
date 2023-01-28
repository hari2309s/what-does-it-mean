import styled from '@emotion/styled';
import React from 'react';
import { useAppSelector } from '../store';
import {
  selectError,
  selectLoading,
  selectMeaning,
} from '../store/features/search/searchSlice';
import megaPhone from '../assets/sound.png';
import useNormalizeMeaning from '../hooks/useNormalizeMeaning';
import { Meaning } from '../api/api';
import NotFound from './NotFound';
import Info from './Info';

const Result = () => {
  const meaning = useAppSelector(selectMeaning);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const normalizedMeaning = useNormalizeMeaning(meaning?.[0]);

  const handleSpeakWord = () => {
    const audio = new Audio(normalizedMeaning?.phonetic.audio);
    audio.play();
  };

  return (
    <Container>
      {error ? (
        <NotFound />
      ) : meaning?.length > 0 ? (
        <>
          <Word>{normalizedMeaning?.word}</Word>
          <Phonetic show={!!normalizedMeaning?.hasPhonetic}>
            <p>{normalizedMeaning?.phonetic.text}</p>
            <img src={megaPhone} alt="mega-phone" onClick={handleSpeakWord} />
          </Phonetic>
          {normalizedMeaning?.meanings?.map(
            (meaning: Meaning, index: number) => (
              <Meanings key={`${meaning.partOfSpeech}-${index}`}>
                <div>
                  <p>{meaning.partOfSpeech}</p>
                  <p>{meaning.definitions[0].definition}</p>
                </div>
                {meaning.definitions[0].example && (
                  <p>{meaning.definitions[0].example}</p>
                )}
              </Meanings>
            )
          )}
        </>
      ) : (
        !isLoading && <Info />
      )}
    </Container>
  );
};

const Container = styled.div({
  width: '500px',
  height: '60vh',
  margin: '30px 10px 40px',
  background: 'rgba(159, 134, 192, 0.4)',
  borderRadius: '5px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
});

const Word = styled.div({
  padding: '20px',
  fontSize: '30px',
  color: '#fef9ef',
  fontWeight: 500,
});

const Phonetic = styled.div<{ show: boolean }>((props) => ({
  display: props.show ? 'flex' : 'none',
  alignItems: 'center',
  gap: '10px',
  color: '#231942',
  fontSize: '14px',
  paddingBottom: '30px',

  '> p': {
    margin: '0 20px',
  },

  '> img': {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    transition: 'transform .2s',

    '&:hover': {
      transform: 'scale(1.5)',
    },
  },
}));

const Meanings = styled.div({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px',
  color: '#fffdfa',

  '> p': {
    padding: '0 20px',
    fontStyle: 'italic',
    color: '#231942',
  },

  '> div': {
    display: 'flex',
    gap: '5px 40px',

    '> p': {
      padding: '0 20px',
      fontSize: '15px',
    },

    '> p:nth-of-type(1)': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '16px',
      fontStyle: 'italic',
    },
  },
});

export default Result;
