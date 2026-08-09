import { render, screen } from '@testing-library/react';
import App from './AppModern.tsx';

test('renders Home navigation links', () => {
  render(<App />);
  expect(screen.getAllByRole('link', { name: 'Home' }).length).toBeGreaterThan(0);
});
