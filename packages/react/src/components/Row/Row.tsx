import type { ElementType, CSSProperties } from 'react';
import type { PolymorphicProps } from '../../types/polymorphic';
import styles from './Row.module.scss';

type Align = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

const alignMap: Record<Align, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
  baseline: styles.alignBaseline,
};

const justifyMap: Record<Justify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
  around: styles.justifyAround,
  evenly: styles.justifyEvenly,
};

type RowOwnProps = {
  gap?: string;
  align?: Align;
  justify?: Justify;
  wrap?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Row<E extends ElementType = 'div'>({
  as,
  gap,
  align,
  justify,
  wrap,
  className,
  style,
  children,
  ...rest
}: PolymorphicProps<E, RowOwnProps>) {
  const Component = as ?? 'div';
  const cls = [
    styles.row,
    align && alignMap[align],
    justify && justifyMap[justify],
    wrap && styles.wrap,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const mergedStyle: CSSProperties = {
    ...style,
    ...(gap ? { gap: `var(--ds-spacing-${gap})` } : {}),
  };

  return (
    <Component className={cls} style={mergedStyle} {...rest}>
      {children}
    </Component>
  );
}
