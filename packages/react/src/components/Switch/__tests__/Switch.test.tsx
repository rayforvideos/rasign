import { render, screen } from '@testing-library/react';
import { Switch } from '../Switch';

describe('Switch', () => {
  test('renders with label', () => {
    render(<Switch label="Dark mode" />);
    expect(screen.getByLabelText('Dark mode')).toBeInTheDocument();
  });

  test('has switch role', () => {
    render(<Switch label="Toggle" />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  test('renders disabled', () => {
    render(<Switch label="Toggle" disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });
});
