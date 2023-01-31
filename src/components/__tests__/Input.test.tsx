import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithProviders } from '../../test-utils';
import Input from '../Input';

jest.useFakeTimers();

describe('<Input />', () => {
  test('renders component properly', () => {
    renderWithProviders(<Input />);

    expect(
      screen.getByPlaceholderText('Type something...')
    ).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });

  test('input field behaves properly', async () => {
    const { store } = renderWithProviders(<Input />);

    store.dispatch = jest.fn();

    const inputField =
      screen.getByPlaceholderText<HTMLInputElement>('Type something...');

    expect(inputField).toBeInTheDocument();

    act(() => {
      userEvent.type(inputField, 'laugh');
    });

    expect(inputField.value).toBe('laugh');

    jest.runAllTimers();

    expect(await store.dispatch).toHaveBeenCalledTimes(5);
  });
});
