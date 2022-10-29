export function DateInput({...props}) {
  return (
    <div className='flex items-center h-12 gap-3 py-4 px-3 rounded bg-white w-full focus-within:ring-2 ring-green-light' >
      <input type="date" className='bg-transparent outline-none flex-1 text-gray-semidark text-sm' {...props}
    />
    </div>
  );
}
