import { render, screen } from '@testing-library/react';
import App from '../App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test('renders learn react link', () => {
    const expected = /learn react/i;
    const { getByText } = render(<App />); 
    expect(getByText(expected)); 
 });