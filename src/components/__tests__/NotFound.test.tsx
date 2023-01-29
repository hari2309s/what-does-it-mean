import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../test-utils';
import NotFound from '../NotFound';

describe('<NotFound />', () => {
  test('renders components properly', () => {
    renderWithProviders(<NotFound />);

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'not-found' })).toBeInTheDocument();
    expect(
      screen.getByText(
        `We couldn't find meaning for the word! Type something new...`
      )
    ).toBeInTheDocument();
  });
});
