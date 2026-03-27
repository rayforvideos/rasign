import styles from './Avatar.module.scss';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: Size;
}

export function Avatar({
  src,
  alt,
  initials,
  size = 'md',
  className,
  ...rest
}: AvatarProps) {
  const cls = [styles.avatar, styles[size], className].filter(Boolean).join(' ');

  return (
    <div className={cls} {...rest}>
      {src ? (
        <img className={styles.image} src={src} alt={alt ?? ''} />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
