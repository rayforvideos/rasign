import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

export type PolymorphicProps<
  E extends ElementType,
  Props = {},
> = PropsWithChildren<Props & { as?: E }> &
  Omit<ComponentPropsWithoutRef<E>, keyof Props | 'as'>;
