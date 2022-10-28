import { Heading } from '../components/Heading';

export function NeosGrid({ neosByDayList, neosDay }) {
  return (
    <div className="w-full px-16">
      <Heading className="text-gray-semi-light">Data: {neosDay}</Heading>
      <div className='grid grid-cols-4 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {neosByDayList.map((neo, key) => {
          return (
            <div className='h-12 py-3 px-3 rounded bg-green' key={key}>
              <Heading size="sm">{neo.name}</Heading>
            </div>
          )
        })}
      </div>
    </div>
  )
}
