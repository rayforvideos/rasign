import { render, screen } from '@testing-library/react';
import { Icon } from '../Icon';

function MockSvg(props: React.SVGProps<SVGSVGElement>) {
  return <svg data-testid="svg-icon" {...props} />;
}

describe('Icon', () => {
  test('renders SVG component', () => {
    render(<Icon svg={MockSvg} label="Close" />);
    expect(screen.getByTestId('svg-icon')).toBeInTheDocument();
  });

  test('applies size', () => {
    render(<Icon svg={MockSvg} size="lg" label="Close" />);
    const wrapper = screen.getByRole('img');
    expect(wrapper.className).toContain('lg');
  });

  test('sets aria-label', () => {
    render(<Icon svg={MockSvg} label="Close" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Close');
  });
});
