import { Link } from "react-router-dom";
import { usePerson } from "./hooks/usePerson";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Person = () => {
  const { person, homeworld, loading } = usePerson();

  if (loading) return <div className='text-white'>Cargando...</div>;
  if (!person) return <div className='text-white'>Persona no encontrada</div>;

  return (
    <div className='mx-0 md:mx-12 my-6'>
      <Link
        to='/people'
        className='underline text-xs text-red-750 hover:text-white'
      >
        <p className='mb-4'>Back to people</p>
      </Link>
      <h1 className='text-4xl font-bold mb-8'>{person.name}</h1>
      <div className='mb-8'>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Year of Birth:</p>
          <p className='font-roboto-bold'>{person.birth_year}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Height:</p>
          <p className='font-roboto-bold'>{person.height}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Mass:</p>
          <p className='font-roboto-bold'>{person.mass}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Hair color:</p>
          <p className='font-roboto-bold'>{person.hair_color}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Skin color:</p>
          <p className='font-roboto-bold'>{person.skin_color}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Eye color:</p>
          <p className='font-roboto-bold'>{person.eye_color}</p>
        </div>
      </div>

      {homeworld && (
        <Card className='flex flex-col justify-between px-5 pt-3 pb-4 min-w-full w-full min-h-[140px] md:min-w-[386px] md:w-fit bg-blue-950 border-2 border-red-750 text-white'>
          <CardHeader className='p-0 flex flex-row justify-between items-center'>
            <span className='text-red-500 text-sm'>Homeworld</span>
            <p className='text-2xl font-bold'>{homeworld.name}</p>
          </CardHeader>
          <CardContent className='p-0 flex flex-row justify-between items-end'>
            <div className=''>
              <div className='flex gap-2'>
                <span className='font-roboto-light'>Climate:</span>
                <span className='font-roboto-bold'>{homeworld.climate}</span>
              </div>
              <div className='flex gap-2'>
                <span className='font-roboto-light'>Terrain:</span>
                <span className='font-roboto-bold'>{homeworld.terrain}</span>
              </div>
            </div>
            <Link
              to={`/planets/${homeworld.id}`}
              className='underline text-sm inline-flex items-center hover:text-red-750 transition-colors'
            >
              Go to the planet &gt;
            </Link>
          </CardContent>
        </Card>
      )}

      <div className='flex flex-col md:flex-row gap-4 mt-8'>
        <div className='flex justify-between md:justify-start  gap-6 bg-blue-950 p-4 rounded-lg text-center border border-red-750'>
          <p className='text-red-750 font-bold'>Films</p>
          <p className='text-xl font-bold'>{person.films.length}</p>
        </div>
        <div className='flex justify-between md:justify-start  gap-6 bg-blue-950 p-4 rounded-lg text-center border border-red-750'>
          <p className='text-red-750 font-bold'>Vehicles</p>
          <p className='text-xl font-bold'>{person.vehicles.length}</p>
        </div>
        <div className='flex justify-between md:justify-start  gap-6 bg-blue-950 p-4 rounded-lg text-center border border-red-750'>
          <p className='text-red-750 font-bold'>Starships</p>
          <p className='text-xl font-bold'>{person.starships.length}</p>
        </div>
      </div>
    </div>
  );
};
