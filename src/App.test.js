import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders well damn link', () => {
  render(<App />);
  const linkElement = screen.getByText(/well damn/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders doch link', () => {
  render(<App />);
  const linkElement = screen.getByText(/doch/i);
  expect(linkElement).toBeInTheDocument();
});