import { clsx } from 'clsx';




export function Heading({size = 'md', children, className}) { 
  return (
    <h1 className={clsx('text-black font-bold font-sans', {
      'text-lg': size === 'sm',
      'text-xl': size === 'md',
      'text-2xl': size === 'lg',
    },
    className)}>
      { children }
    </h1>
  )
}
