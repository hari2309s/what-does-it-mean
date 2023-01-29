import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './test-utils';

test('renders component properly', () => {
  renderWithProviders(<App />);

  expect(
    screen.getByRole('heading', { name: 'What does it mean?' })
  ).toBeInTheDocument();
  expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
  expect(screen.getByTestId('search-input')).toBeInTheDocument();
  expect(screen.getByTestId('result')).toBeInTheDocument();
  expect(screen.getByTestId('info')).toBeInTheDocument();
});
