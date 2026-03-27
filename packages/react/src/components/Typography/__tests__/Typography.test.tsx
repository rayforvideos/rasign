// src/components/Typography/__tests__/Typography.test.tsx
import { render, screen } from '@testing-library/react';
import { Typography } from '../Typography';

describe('Typography', () => {
  test('renders with default element (p)', () => {
    render(<Typography variant="body">Hello</Typography>);
    const el = screen.getByText('Hello');
    expect(el.tagName).toBe('P');
  });

  test('renders with as prop', () => {
    render(
      <Typography as="h1" variant="heading-xl">
        Title
      </Typography>,
    );
    const el = screen.getByText('Title');
    expect(el.tagName).toBe('H1');
  });

  test('renders as anchor with href', () => {
    render(
      <Typography as="a" href="/test" variant="body">
        Link
      </Typography>,
    );
    const el = screen.getByText('Link');
    expect(el.tagName).toBe('A');
    expect(el).toHaveAttribute('href', '/test');
  });

  test('applies variant class', () => {
    render(<Typography variant="heading-lg">Text</Typography>);
    const el = screen.getByText('Text');
    expect(el.className).toContain('headingLg');
  });

  test('merges custom className', () => {
    render(
      <Typography variant="body" className="custom">
        Text
      </Typography>,
    );
    const el = screen.getByText('Text');
    expect(el.className).toContain('custom');
  });
});
