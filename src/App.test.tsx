import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fetching some data via a custom hook/i);
  expect(linkElement).toBeInTheDocument();
});
