import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders corona tracker title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Corona Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
