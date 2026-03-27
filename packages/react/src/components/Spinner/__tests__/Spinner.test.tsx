import { render, screen } from '@testing-library/react';
import { Spinner } from '../Spinner';

describe('Spinner', () => {
  test('renders with status role', () => {
    render(<Spinner />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('has aria-label', () => {
    render(<Spinner label="Loading data" />);
    expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading data');
  });

  test('applies size class', () => {
    render(<Spinner size="lg" />);
    expect(screen.getByRole('status').className).toContain('lg');
  });
});
