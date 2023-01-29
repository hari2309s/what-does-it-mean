import { screen } from '@testing-library/react';
import React from 'react';
import { mockedMeaning } from '../../mocks';
import { renderWithProviders } from '../../test-utils';
import Result from '../Result';

describe('<Result />', () => {
  test('renders Meaning component properly', () => {
    renderWithProviders(<Result />, {
      preloadedState: {
        search: {
          meaning: [mockedMeaning],
          loading: false,
          error: null,
          isTyping: false,
        },
      },
    });

    expect(screen.getByTestId('result')).toBeInTheDocument();

    expect(screen.getByTestId('meaning')).toBeInTheDocument();

    expect(screen.queryByTestId('not-found')).not.toBeInTheDocument();
    expect(screen.queryByTestId('info')).not.toBeInTheDocument();

    expect(screen.getByText(mockedMeaning.word)).toBeInTheDocument();

    expect(screen.getByText(mockedMeaning.phonetic)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'mega-phone' })).toBeInTheDocument();
  });

  test('renders Not found component properly', () => {
    renderWithProviders(<Result />, {
      preloadedState: {
        search: {
          meaning: [],
          error: new Error(),
          loading: false,
          isTyping: false,
        },
      },
    });

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'not-found' })).toBeInTheDocument();

    expect(screen.queryByTestId('meaning')).not.toBeInTheDocument();
    expect(screen.queryByTestId('info')).not.toBeInTheDocument();
  });

  test('renders Info component properly', () => {
    renderWithProviders(<Result />, {
      preloadedState: {
        search: {
          meaning: [],
          error: null,
          loading: false,
          isTyping: false,
        },
      },
    });

    expect(screen.getByTestId('info')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'typing' })).toBeInTheDocument();

    expect(screen.queryByTestId('not-found')).not.toBeInTheDocument();
    expect(screen.queryByTestId('meaning')).not.toBeInTheDocument();
  });
});
