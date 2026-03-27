import type { ElementType, CSSProperties } from 'react';
import type { PolymorphicProps } from '../../types/polymorphic';
import styles from '@rasign/styles/components/surface.module.scss';

type Elevation = 'sm' | 'md' | 'lg' | 'xl';
type Rounded = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const elevationMap: Record<Elevation, string> = {
  sm: styles.elevationSm,
  md: styles.elevationMd,
  lg: styles.elevationLg,
  xl: styles.elevationXl,
};

const roundedMap: Record<Rounded, string> = {
  sm: styles.roundedSm,
  md: styles.roundedMd,
  lg: styles.roundedLg,
  xl: styles.roundedXl,
  full: styles.roundedFull,
};

type SurfaceOwnProps = {
  elevation?: Elevation;
  rounded?: Rounded;
  bordered?: boolean;
  padding?: string;
  className?: string;
  style?: CSSProperties;
};

export function Surface<E extends ElementType = 'div'>({
  as,
  elevation,
  rounded,
  bordered,
  padding,
  className,
  style,
  children,
  ...rest
}: PolymorphicProps<E, SurfaceOwnProps>) {
  const Component = as ?? 'div';
  const cls = [
    styles.surface,
    elevation && elevationMap[elevation],
    rounded && roundedMap[rounded],
    bordered && styles.bordered,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const mergedStyle: CSSProperties = {
    ...style,
    ...(padding ? { padding: `var(--ds-spacing-${padding})` } : {}),
  };

  return (
    <Component className={cls} style={mergedStyle} {...rest}>
      {children}
    </Component>
  );
}
