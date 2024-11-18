import { usePlanet } from "./hooks/usePlanet";

export const Starship = () => {
  const { starship, loading } = usePlanet();

  if (loading) return <div className='text-white'>Cargando...</div>;
  if (!starship) return <div className='text-white'>Planeta no encontrado</div>;

  return (
    <div className='mx-0 md:mx-12 my-6'>
      <h1 className='text-4xl font-bold mb-8'>{starship.name}</h1>
      <div className='mb-8'>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Model:</p>
          <p className='font-roboto-bold'>{starship.model}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Manufacturer:</p>
          <p className='font-roboto-bold'>{starship.manufacturer}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Cost in credits:</p>
          <p className='font-roboto-bold'>{starship.cost_in_credits}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Length:</p>
          <p className='font-roboto-bold'>{starship.length}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>
            Max atmosphering speed:
          </p>
          <p className='font-roboto-bold'>{starship.max_atmosphering_speed}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Crew:</p>
          <p className='font-roboto-bold'>{starship.crew}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Passengers:</p>
          <p className='font-roboto-bold'>{starship.passengers}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Cargo capacity:</p>
          <p className='font-roboto-bold'>{starship.cargo_capacity}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Consumables:</p>
          <p className='font-roboto-bold'>{starship.consumables}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>
            Hyperdrive rating:
          </p>
          <p className='font-roboto-bold'>{starship.hyperdrive_rating}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>MGLT:</p>
          <p className='font-roboto-bold'>{starship.MGLT}</p>
        </div>
        <div className='w-fit flex justify-between'>
          <p className='font-roboto-light md:min-w-[250px]'>Starship class:</p>
          <p className='font-roboto-bold'>{starship.starship_class}</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4 mt-8'>
        <div className='flex justify-between md:justify-start  gap-6 bg-blue-950 p-4 rounded-lg text-center border border-red-750'>
          <p className='text-red-750 font-bold'>Films</p>
          <p className='text-xl font-bold'>{starship.films.length}</p>
        </div>
      </div>
    </div>
  );
};
