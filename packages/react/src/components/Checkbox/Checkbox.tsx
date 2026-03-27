import { useId, forwardRef } from 'react';
import styles from '@rasign/styles/components/checkbox.module.scss';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, disabled, className, ...rest }, ref) => {
    const id = useId();
    const cls = [styles.wrapper, disabled && styles.disabled, className].filter(Boolean).join(' ');

    return (
      <label className={cls} htmlFor={id}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={styles.checkbox}
          disabled={disabled}
          {...rest}
        />
        <span className={styles.label}>{label}</span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
