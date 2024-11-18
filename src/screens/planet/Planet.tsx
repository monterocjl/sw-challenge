import { Link } from "react-router-dom";
import { usePlanet } from "./hooks/usePlanet";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Planet = () => {
  const { planet, loading } = usePlanet();

  if (loading) return <div className='text-white'>Cargando...</div>;
  if (!planet) return <div className='text-white'>Planeta no encontrado</div>;

  return (
    <div className='mx-0 md:mx-12 my-6'>
      <h1 className='text-4xl font-bold mb-8'>{planet.name}</h1>
      <div className='mb-8'>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Rotation period:</p>
          <p className='font-roboto-bold'>{planet.rotation_period}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Orbital period:</p>
          <p className='font-roboto-bold'>{planet.orbital_period}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Diameter:</p>
          <p className='font-roboto-bold'>{planet.diameter}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Climate:</p>
          <p className='font-roboto-bold'>{planet.climate}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Gravity:</p>
          <p className='font-roboto-bold'>{planet.gravity}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Terrain:</p>
          <p className='font-roboto-bold'>{planet.terrain}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Surface water:</p>
          <p className='font-roboto-bold'>{planet.surface_water}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Population:</p>
          <p className='font-roboto-bold'>{planet.population}</p>
        </div>
      </div>

      <Card className='flex flex-col justify-between px-5 pt-3 pb-4 min-w-full w-full min-h-[140px] md:min-w-[386px] md:w-fit bg-blue-950 border-2 border-red-750 text-white'>
        <CardHeader className='p-0 flex flex-row justify-between items-center'>
          <span className='text-red-500 text-sm'>Residents</span>
        </CardHeader>
        <CardContent className='p-0 flex flex-row justify-between items-end mt-4 '>
          <div className='flex flex-col md:flex-row flex-wrap w-full gap-4'>
            {planet.residents.map((resident) => (
              <Link key={resident} to={`/people/${resident}`}>
                <div className='bg-red-750 text-white px-4 rounded-md hover:bg-red-700 p-2 text-center '>
                  Resident {resident}
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className='flex flex-col md:flex-row gap-4 mt-8'>
        <div className='flex justify-between md:justify-start  gap-6 bg-blue-950 p-4 rounded-lg text-center border border-red-750'>
          <p className='text-red-750 font-bold'>Films</p>
          <p className='text-xl font-bold'>{planet.films.length}</p>
        </div>
      </div>
    </div>
  );
};
