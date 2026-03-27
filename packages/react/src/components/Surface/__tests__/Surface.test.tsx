// src/components/Surface/__tests__/Surface.test.tsx
import { render, screen } from '@testing-library/react';
import { Surface } from '../Surface';

describe('Surface', () => {
  test('renders as div by default', () => {
    render(<Surface data-testid="surface">Content</Surface>);
    expect(screen.getByTestId('surface').tagName).toBe('DIV');
  });

  test('renders with as prop', () => {
    render(
      <Surface as="section" data-testid="surface">
        Content
      </Surface>,
    );
    expect(screen.getByTestId('surface').tagName).toBe('SECTION');
  });

  test('applies elevation class', () => {
    render(
      <Surface elevation="md" data-testid="surface">
        Content
      </Surface>,
    );
    expect(screen.getByTestId('surface').className).toContain('elevationMd');
  });

  test('applies padding style', () => {
    render(
      <Surface padding="4" data-testid="surface">
        Content
      </Surface>,
    );
    expect(screen.getByTestId('surface').style.padding).toBe('var(--ds-spacing-4)');
  });

  test('applies rounded class', () => {
    render(
      <Surface rounded="lg" data-testid="surface">
        Content
      </Surface>,
    );
    expect(screen.getByTestId('surface').className).toContain('roundedLg');
  });
});
