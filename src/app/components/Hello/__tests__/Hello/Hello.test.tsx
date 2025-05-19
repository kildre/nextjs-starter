import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hello from '../../Hello';

test('renders Hello component', () => {
  render(<Hello />);
  expect(screen.getByText('Hello, Next.js!')).toBeInTheDocument();
});
