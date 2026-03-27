import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
  test('renders children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  test('applies variant class', () => {
    render(
      <Badge variant="success" data-testid="badge">
        OK
      </Badge>,
    );
    expect(screen.getByTestId('badge').className).toContain('success');
  });
});
