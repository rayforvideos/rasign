import type { ElementType } from 'react';
import type { PolymorphicProps } from '../../types/polymorphic';
import styles from '@rasign/styles/components/typography.module.scss';

type Variant =
  | 'heading-xl'
  | 'heading-lg'
  | 'heading-md'
  | 'heading-sm'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'code';

const variantClassMap: Record<Variant, string> = {
  'heading-xl': styles.headingXl,
  'heading-lg': styles.headingLg,
  'heading-md': styles.headingMd,
  'heading-sm': styles.headingSm,
  'body': styles.body,
  'body-sm': styles.bodySm,
  'caption': styles.caption,
  'code': styles.code,
};

type TypographyOwnProps = {
  variant: Variant;
  className?: string;
};

export function Typography<E extends ElementType = 'p'>({
  as,
  variant,
  className,
  children,
  ...rest
}: PolymorphicProps<E, TypographyOwnProps>) {
  const Component = as ?? 'p';
  const cls = [styles.typography, variantClassMap[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={cls} {...rest}>
      {children}
    </Component>
  );
}
