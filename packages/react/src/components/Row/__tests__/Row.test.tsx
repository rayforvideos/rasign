// src/components/Row/__tests__/Row.test.tsx
import { render, screen } from '@testing-library/react';
import { Row } from '../Row';

describe('Row', () => {
  test('renders as div by default', () => {
    render(<Row data-testid="row">Content</Row>);
    const el = screen.getByTestId('row');
    expect(el.tagName).toBe('DIV');
  });

  test('renders with as prop', () => {
    render(
      <Row as="nav" data-testid="row">
        Nav
      </Row>,
    );
    expect(screen.getByTestId('row').tagName).toBe('NAV');
  });

  test('applies gap style', () => {
    render(
      <Row gap="4" data-testid="row">
        Content
      </Row>,
    );
    const el = screen.getByTestId('row');
    expect(el.style.gap).toBe('var(--ds-spacing-4)');
  });

  test('applies align class', () => {
    render(
      <Row align="center" data-testid="row">
        Content
      </Row>,
    );
    expect(screen.getByTestId('row').className).toContain('alignCenter');
  });

  test('applies justify class', () => {
    render(
      <Row justify="between" data-testid="row">
        Content
      </Row>,
    );
    expect(screen.getByTestId('row').className).toContain('justifyBetween');
  });

  test('applies wrap class', () => {
    render(
      <Row wrap data-testid="row">
        Content
      </Row>,
    );
    expect(screen.getByTestId('row').className).toContain('wrap');
  });
});
