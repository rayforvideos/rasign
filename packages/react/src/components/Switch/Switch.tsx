import { useId, forwardRef } from 'react';
import styles from './Switch.module.scss';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, disabled, className, ...rest }, ref) => {
    const id = useId();
    const cls = [styles.wrapper, disabled && styles.disabled, className]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={cls} htmlFor={id}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          role="switch"
          className={styles.hiddenInput}
          disabled={disabled}
          {...rest}
        />
        <span className={styles.track}>
          <span className={styles.thumb} />
        </span>
        <span className={styles.label}>{label}</span>
      </label>
    );
  },
);

Switch.displayName = 'Switch';
