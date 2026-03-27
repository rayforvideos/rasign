import { render, screen } from '@testing-library/react';
import { Divider } from '../Divider';

describe('Divider', () => {
  test('renders separator role', () => {
    render(<Divider />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  test('applies vertical class', () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole('separator').className).toContain('vertical');
  });

  test('defaults to horizontal', () => {
    render(<Divider />);
    expect(screen.getByRole('separator').className).toContain('horizontal');
  });
});
