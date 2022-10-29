import { clsx } from 'clsx';

export function Heading({size = 'md', children, className}) { 
  return (
    <h1 className={clsx('font-bold font-sans', {
      'text-md': size === 'sm',
      'text-lg': size === 'md',
      'text-xl': size === 'lg',
    },
    className)}>
      { children }
    </h1>
  )
}
