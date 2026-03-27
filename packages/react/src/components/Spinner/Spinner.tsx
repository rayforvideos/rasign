import styles from '@rasign/styles/components/spinner.module.scss';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
  label?: string;
}

export function Spinner({ size = 'md', label = 'Loading', className, ...rest }: SpinnerProps) {
  const cls = [styles.spinner, styles[size], className].filter(Boolean).join(' ');

  return <div className={cls} role="status" aria-label={label} {...rest} />;
}
