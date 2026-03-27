import { render, screen, act } from '@testing-library/react';
import { DesignSystemProvider, useDesignSystem } from '../DesignSystemProvider';

function ThemeDisplay() {
  const { theme, brand, setTheme } = useDesignSystem();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="brand">{brand}</span>
      <button onClick={() => setTheme('dark')}>Toggle</button>
    </div>
  );
}

describe('DesignSystemProvider', () => {
  afterEach(() => {
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.removeAttribute('data-brand');
  });

  test('sets data-brand and data-theme on documentElement', () => {
    render(
      <DesignSystemProvider brand="service-a" defaultTheme="light">
        <ThemeDisplay />
      </DesignSystemProvider>,
    );
    expect(document.documentElement.getAttribute('data-brand')).toBe('service-a');
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  test('provides brand and theme via context', () => {
    render(
      <DesignSystemProvider brand="service-b" defaultTheme="dark">
        <ThemeDisplay />
      </DesignSystemProvider>,
    );
    expect(screen.getByTestId('brand')).toHaveTextContent('service-b');
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  test('throws when useDesignSystem is used outside provider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<ThemeDisplay />)).toThrow(
      'useDesignSystem must be used within DesignSystemProvider',
    );
    spy.mockRestore();
  });

  test('setTheme updates theme', () => {
    render(
      <DesignSystemProvider brand="service-a" defaultTheme="light">
        <ThemeDisplay />
      </DesignSystemProvider>,
    );
    act(() => {
      screen.getByText('Toggle').click();
    });
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
