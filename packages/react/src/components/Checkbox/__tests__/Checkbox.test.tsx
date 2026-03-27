import { render, screen } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  test('renders with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  test('is a checkbox input', () => {
    render(<Checkbox label="Check" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('renders disabled', () => {
    render(<Checkbox label="Check" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
