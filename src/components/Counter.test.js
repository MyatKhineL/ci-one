import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  test('renders initial count of 0', () => {
    const countElement = screen.getByTestId('count-display');
    expect(countElement).toHaveTextContent('Counter: 0');
  });

  test('increments count when increment button is clicked', () => {
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    const countElement = screen.getByTestId('count-display');
    expect(countElement).toHaveTextContent('Counter: 1');
  });

  test('decrements count when decrement button is clicked', () => {
    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    const countElement = screen.getByTestId('count-display');
    expect(countElement).toHaveTextContent('Counter: -1');
  });
}); 