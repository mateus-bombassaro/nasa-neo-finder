import { clsx } from 'clsx';

export function Text({size = 'md', children, className}) {
  return (
    <p className={clsx('text-gray-100', {
      'text-xs': size === 'sm',
      'text-sm': size === 'md',
      'text-md': size === 'lg',
    },
    className)}>
      { children }
    </p>
  )
}
