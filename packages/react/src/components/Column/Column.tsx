import type { ElementType, CSSProperties } from 'react';
import type { PolymorphicProps } from '../../types/polymorphic';
import styles from './Column.module.scss';

type Align = 'start' | 'center' | 'end' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between';

const alignMap: Record<Align, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
};

const justifyMap: Record<Justify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
};

type ColumnOwnProps = {
  gap?: string;
  align?: Align;
  justify?: Justify;
  className?: string;
  style?: CSSProperties;
};

export function Column<E extends ElementType = 'div'>({
  as,
  gap,
  align,
  justify,
  className,
  style,
  children,
  ...rest
}: PolymorphicProps<E, ColumnOwnProps>) {
  const Component = as ?? 'div';
  const cls = [
    styles.column,
    align && alignMap[align],
    justify && justifyMap[justify],
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
