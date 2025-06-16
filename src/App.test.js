import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders React Testing Example heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/React Testing Example/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Counter component', () => {
    render(<App />);
    const counterElement = screen.getByTestId('count-display');
    expect(counterElement).toBeInTheDocument();
  });
});
