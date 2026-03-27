import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  test('renders with children', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click');
  });

  test('applies primary variant by default', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button').className).toContain('primary');
  });

  test('applies secondary variant', () => {
    render(<Button variant="secondary">Click</Button>);
    expect(screen.getByRole('button').className).toContain('secondary');
  });

  test('applies ghost variant', () => {
    render(<Button variant="ghost">Click</Button>);
    expect(screen.getByRole('button').className).toContain('ghost');
  });

  test('applies size classes', () => {
    render(<Button size="lg">Click</Button>);
    expect(screen.getByRole('button').className).toContain('lg');
  });

  test('renders as disabled', () => {
    render(<Button disabled>Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('supports fullWidth', () => {
    render(<Button fullWidth>Click</Button>);
    expect(screen.getByRole('button').className).toContain('fullWidth');
  });
});
