import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  
  const greetingElement = screen.getByText(/¡Bienvenido a Vino Deluxe!/i);
  expect(greetingElement).toBeInTheDocument();
});
