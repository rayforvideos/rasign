import styles from '@rasign/styles/components/divider.module.scss';

type Orientation = 'horizontal' | 'vertical';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: Orientation;
}

export function Divider({ orientation = 'horizontal', className, ...rest }: DividerProps) {
  const cls = [styles.divider, styles[orientation], className].filter(Boolean).join(' ');

  return <hr className={cls} role="separator" aria-orientation={orientation} {...rest} />;
}
