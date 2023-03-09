import styled from '@emotion/styled';
import React from 'react';
import { useAppSelector } from '../store';
import {
  selectCurrentIndexInHistory,
  selectError,
  selectHistory,
  selectIsTyping,
  selectLoading,
  selectMeaning,
} from '../store/features/search/searchSlice';
import megaPhone from '../assets/sound.png';
import useNormalizeMeaning from '../hooks/useNormalizeMeaning';
import { Meaning } from '../api/api';
import NotFound from './NotFound';
import Info from './Info';

const Result = () => {
  const isTyping = useAppSelector(selectIsTyping);
  const meaning = useAppSelector(selectMeaning);
  const currentIndexInHistory = useAppSelector(selectCurrentIndexInHistory);
  const history = useAppSelector(selectHistory);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  const normalizedMeaning = useNormalizeMeaning(
    meaning?.[0] ?? history[currentIndexInHistory]
  );

  const handleSpeakWord = () => {
    const audio = new Audio(normalizedMeaning?.phonetic.audio);
    audio.play();
  };

  return (
    <Container data-testid="result">
      {error && <NotFound />}
      {(meaning?.length > 0 || (meaning?.length == 0 && normalizedMeaning)) && (
        <div data-testid="meaning">
          <Word>{normalizedMeaning?.word}</Word>
          <Phonetic show={!!normalizedMeaning?.hasPhonetic}>
            <p>{normalizedMeaning?.phonetic.text}</p>
            <img src={megaPhone} alt="mega-phone" onClick={handleSpeakWord} />
          </Phonetic>
          {normalizedMeaning?.meanings?.map(
            (meaning: Meaning, index: number) => (
              <Meanings
                key={`${meaning.partOfSpeech}-${index}`}
                datat-testid="meanings"
              >
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
        </div>
      )}
      {!isTyping && !isLoading && meaning?.length === 0 && !error && <Info />}
    </Container>
  );
};

const Container = styled.div({
  width: '500px',
  height: '60vh',
  margin: '30px 10px 40px',
  background: 'rgba(95, 112, 127, 0.4)',
  borderRadius: '5px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(204, 233, 252, 0.3)',
  overflow: 'auto',

  '@media (max-width: 600px)': {
    width: '350px',
  },

  '@media (max-width: 400px)': {
    width: '300px',
  },
});

const Word = styled.div({
  padding: '20px',
  fontSize: '30px',
  color: '#f8fcff',
  fontWeight: 500,
});

const Phonetic = styled.div<{ show: boolean }>((props) => ({
  display: props.show ? 'flex' : 'none',
  alignItems: 'center',
  gap: '10px',
  color: '#39434c',
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
  opacity: 1,
  display: 'flex',
  flexDirection: 'column',
  color: '#f8fcff',

  '> p': {
    padding: '0 20px',
    fontStyle: 'italic',
    color: '#39434c',
  },

  '> div': {
    display: 'flex',
    gap: '5px 40px',

    '> p': {
      padding: '0 20px',
    },

    '> p:nth-of-type(1)': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '16px',
      fontStyle: 'italic',
      color: '#39434c',
    },
  },

  '@media (max-width: 600px)': {
    '> div > p': {
      padding: '0 18px',
    },
  },

  '@media (max-width: 400px)': {
    '> div > p': {
      padding: '0 15px',
    },
  },
});

export default Result;
