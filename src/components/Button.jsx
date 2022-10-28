import { clsx } from 'clsx';

export function Button({ children, className, ...props}) {
  return (
    <button
      className={clsx('py-3 px-4 bg-blue rounded font-semibold text-white text-sm w-full transition-colors hover:bg-blue-semi-light focus:ring-2 ring-white', className)}
      {...props}>
      { children }
    </button>
  )
}
