import { clsx } from 'clsx';

export function Heading({size = 'md', children, className, props}) { 
  return (
    <h1 className={clsx('font-bold font-sans', {
      'text-md': size === 'sm',
      'text-lg': size === 'md',
      'text-xl': size === 'lg',
    },
      className)}
      {...props}>
      { children }
    </h1>
  )
}
