import { clsx } from 'clsx';

export function Text({size = 'md', children, className}) {
  return (
    <p className={clsx({
      'text-sm': size === 'sm',
      'text-md': size === 'md',
      'text-lg': size === 'lg',
    },
    className)}>
      { children }
    </p>
  )
}
