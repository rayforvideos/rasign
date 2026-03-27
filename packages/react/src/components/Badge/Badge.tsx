import styles from '@rasign/styles/components/badge.module.scss';

type Variant = 'default' | 'success' | 'danger' | 'warning';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Badge({
  variant = 'default',
  className,
  children,
  ...rest
}: BadgeProps) {
  const cls = [styles.badge, styles[variant], className].filter(Boolean).join(' ');

  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}
