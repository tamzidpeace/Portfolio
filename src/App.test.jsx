import { render, screen } from '@testing-library/react';
import App from './AppModern.tsx';

test('renders Home link', () => {
  render(<App />);
  const homeLinkElement = screen.getByText(/Home/i);
  expect(homeLinkElement).toBeInTheDocument();
});
