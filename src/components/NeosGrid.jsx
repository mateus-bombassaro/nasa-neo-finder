import { Heading } from '../components/Heading';
import { getFormattedDate, getFullDate } from '../services/dateService';
import { Text } from '../components/Text';

export function NeosGrid({ neosByDayList, neosDay }) {

  function getDateFormat() {
    return getFormattedDate(neosDay);
  }

  function getDiameter(neo) {
    return `${neo?.estimated_diameter?.kilometers?.estimated_diameter_min?.toFixed(2)} à ${neo?.estimated_diameter?.kilometers?.estimated_diameter_max?.toFixed(2)}`
  }

  function getIsPotentialHazardous(neo) {
    return neo.is_potentially_hazardous_asteroid ? <Text className='text-red font-semibold'>Potencialmente perigoso</Text> : '';
  }

  function getIsSentryObject(neo) {
    return neo.is_sentry_object ? <Text className='text-blue font-semibold'>Objeto sentinela</Text> : '';
  }

  function onClickNeo(neo) {
    window.alert(`Você clickou no NEO: ${neo.name}. Colisão prevista para ${getFullDate(neo.close_approach_data[0]?.close_approach_date_full)}`)
  }

  return (
    <div className="w-full px-16 py-8">
      <Heading id="neos-date" className="text-gray">Data: {getDateFormat()}</Heading>
      <div className='grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {neosByDayList.map((neo, key) => {
          return (
            <div id="neo" className='flex flex-col p-3 bg-white' key={key}>
              <div onClick={() => onClickNeo(neo)}>
                <Heading  className='text-gray-dark border-b-2 border-dotted border-gray-semi-light mb-2 pb-1 cursor-pointer'>{neo.name}</Heading>
              </div>
              <Text className='text-gray'>ID: {neo.id}</Text>
              <Text>Magnitude: {neo.absolute_magnitude_h}</Text>
              <Text>Diâmetro estimado (Km): {getDiameter(neo)}</Text>
              {getIsPotentialHazardous(neo)}
              {getIsSentryObject(neo)}
              <Text className="text-blue-semi-light hover:underline self-end mt-auto"><a href={neo.links.self}>Saiba mais</a></Text>
            </div>
          )
        })}
      </div>
    </div>
  )
}
