import { render, screen } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
  test('renders text input', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('applies error class when error prop set', () => {
    render(<Input error data-testid="input" />);
    expect(screen.getByTestId('input').className).toContain('error');
  });

  test('renders disabled', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  test('applies fullWidth class', () => {
    render(<Input fullWidth data-testid="input" />);
    expect(screen.getByTestId('input').className).toContain('fullWidth');
  });
});
