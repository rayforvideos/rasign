import { render, screen } from '@testing-library/react';
import { Avatar } from '../Avatar';

describe('Avatar', () => {
  test('renders image when src provided', () => {
    render(<Avatar src="/user.jpg" alt="User" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/user.jpg');
    expect(img).toHaveAttribute('alt', 'User');
  });

  test('renders initials when no src', () => {
    render(<Avatar initials="JD" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  test('applies size class', () => {
    render(<Avatar initials="JD" size="lg" data-testid="avatar" />);
    expect(screen.getByTestId('avatar').className).toContain('lg');
  });
});
