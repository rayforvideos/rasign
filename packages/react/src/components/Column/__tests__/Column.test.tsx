// src/components/Column/__tests__/Column.test.tsx
import { render, screen } from '@testing-library/react';
import { Column } from '../Column';

describe('Column', () => {
  test('renders as div by default', () => {
    render(<Column data-testid="col">Content</Column>);
    expect(screen.getByTestId('col').tagName).toBe('DIV');
  });

  test('renders with as prop', () => {
    render(<Column as="aside" data-testid="col">Sidebar</Column>);
    expect(screen.getByTestId('col').tagName).toBe('ASIDE');
  });

  test('applies gap style', () => {
    render(<Column gap="2" data-testid="col">Content</Column>);
    expect(screen.getByTestId('col').style.gap).toBe('var(--ds-spacing-2)');
  });

  test('applies align class', () => {
    render(<Column align="center" data-testid="col">Content</Column>);
    expect(screen.getByTestId('col').className).toContain('alignCenter');
  });
});
