import type { ComponentType, SVGProps } from 'react';
import styles from './Icon.module.scss';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  svg: ComponentType<SVGProps<SVGSVGElement>>;
  size?: Size;
  label: string;
}

export function Icon({
  svg: SvgComponent,
  size = 'md',
  label,
  className,
  ...rest
}: IconProps) {
  const cls = [styles.icon, styles[size], className].filter(Boolean).join(' ');

  return (
    <span className={cls} role="img" aria-label={label} {...rest}>
      <SvgComponent />
    </span>
  );
}
