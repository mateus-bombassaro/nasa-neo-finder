import { Button } from "../components/Button";
import { DateInput } from "../components/DateInput";
import { Heading } from "../components/Heading";
import { Logo } from "../Logo";
import { getNasaList } from '../api/nasaApi';
import { useState } from "react";
import { NeosGrid } from '../components/NeosGrid';

export function Home() {

  const [neosList, setNeosList] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  function searchData(event) {
    event?.preventDefault()
    getNasaList(startDate, endDate)
      .then((response) => setNeosList(response))
      .catch(() => window.alert('Não foi possível buscar as informações :(. Tente mais tarde.'));
  }

  return (
    <div className="w-screen h-screen bg-gray-light flex flex-col items-center">
      <header className="flex flex-col items-center mt-16">
        <Logo />
        <Heading size="lg" className="mt-4">NASA Near Earth Objects Finder</Heading>
      </header>

      <form onSubmit={searchData} className='flex items-strech w-full max-w-sm mt-10 gap-4'>
        <DateInput onChange={(e) => setStartDate(e.target.value)} />
        <DateInput onChange={(e) => setEndDate(e.target.value)} />    
        <Button type="submit" className='ml-4'>Filtrar</Button>
      </form>

      {Object.keys(neosList).map((neosDay, index) => (
        <NeosGrid key={index} neosDay={neosDay} neosByDayList={neosList[neosDay]} />
      )) }
      {
        neosList[0]
      }
    </div>
  )
}
