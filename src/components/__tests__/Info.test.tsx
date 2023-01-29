import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithProviders } from '../../test-utils';
import Info from '../Info';

describe('<Info />', () => {
  test('renders components properly', () => {
    renderWithProviders(<Info />);

    expect(screen.getByTestId('info')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'typing' })).toBeInTheDocument();
    expect(screen.getByText('Type something...')).toBeInTheDocument();
  });
});
