import { forwardRef } from 'react';
import styles from '@rasign/styles/components/input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, fullWidth, className, ...rest }, ref) => {
    const cls = [
      styles.input,
      error && styles.error,
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <input ref={ref} className={cls} {...rest} />;
  },
);

Input.displayName = 'Input';
