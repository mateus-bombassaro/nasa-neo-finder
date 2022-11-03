import { Button } from "../components/Button";
import { DateInput } from "../components/DateInput";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { getNasaList } from '../api/nasaApi';
import { useState } from "react";
import { NeosGrid } from '../components/NeosGrid';
import { getDateDiff } from "../services/dateService";
import { Text } from '../components/Text';

export function Home() {

  const [neosList, setNeosList] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [isLoading, setIsLoading] = useState(false);

  function searchData(event) {
    event?.preventDefault()

    setNeosList([]);

    if (!startDate || !endDate) {
      window.alert('Por favor, selecione as datas inicial e final do período.');
      return;
    }

    if (getDateDiff(startDate, endDate) > 7 || getDateDiff(startDate, endDate) < -7) {
      window.alert('Por favor, selecione um período de no máximo sete dias.');
      return;
    }

    setIsLoading(true);
    getNasaList(startDate, endDate)
      .then((response) => setNeosList(response))
      .catch(() => window.alert('Não foi possível buscar as informações :(. Tente mais tarde.'))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="w-full h-full min-h-screen bg-gray-light flex flex-col items-center">
      <header className="flex flex-col items-center mt-16">
        <Logo />
        <Heading size="lg" className="mt-4">NASA Near Earth Objects Finder</Heading>
      </header>

      <form onSubmit={searchData} className='flex items-strech w-full max-w-sm mt-10 gap-4'>
        <DateInput onChange={(e) => setStartDate(e.target.value)} />
        <DateInput onChange={(e) => setEndDate(e.target.value)} />    
        <Button type="submit" className='ml-4'>Filtrar</Button>
      </form>

      {isLoading ? <Text className='animate-pulse mt-4'>Aguarde, estamos buscando as informações...</Text> : ''}

      {Object.keys(neosList).map((neosDay, index) => (
        <NeosGrid key={index} neosDay={neosDay} neosByDayList={neosList[neosDay]} />
      ))}
      
    </div>
  )
}
