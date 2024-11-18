import { Link } from "react-router-dom";
import { usePlanets } from "./hooks/usePlanets";

export const Planets = () => {
  const {
    planet,
    previousPage,
    nextPage,
    loading,
    fetchPlanets,
    handleSearch,
    inputValue,
    setInputValue,
  } = usePlanets();

  return (
    <div className='mx-0 md:mx-12 my-6'>
      <div className='flex justify-between flex-col md:flex-row gap-8'>
        <h1 className='text-4xl font-bold'>PLANETS</h1>

        <div className='flex h-fit gap-2'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder='Search'
            className='w-full md:w-fit p-2 text-blue-950 bg-white rounded-md focus:outline-none'
          />
          <button
            onClick={handleSearch}
            className='bg-red-750 text-white px-4 rounded-md hover:bg-red-700'
          >
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <div className='text-white my-16'>Cargando...</div>
      ) : (
        <>
          <div className='my-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {planet.map((planet) => (
              <Link
                key={planet.url}
                to={`/planets/${planet.id}`}
                className='bg-blue-950 border-[3px] border-red-750 p-4 rounded-lg flex flex-col justify-between md:h-[138px]'
              >
                <h2 className='text-xl font-bold'>{planet.name}</h2>
                <div>
                  <div className='flex gap-2'>
                    <p className='font-roboto-light'>Climate: </p>
                    <span className='font-roboto-bold'>{planet.climate}</span>
                  </div>
                  <div className='flex gap-2'>
                    <p className='font-roboto-light'>Terrain: </p>
                    <span
                      className='font-roboto-bold overflow-hidden line-clamp-1'
                      style={{ WebkitLineClamp: 1 }}
                    >
                      {planet.terrain}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className='flex justify-center gap-7 mt-8'>
            <button
              className={`${
                !previousPage
                  ? "text-gray-500 hover:text-gray-500"
                  : "text-white hover:text-red-750"
              }`}
              onClick={() => previousPage && fetchPlanets(previousPage)}
              disabled={!previousPage}
            >
              &lt; atrás
            </button>
            <button
              className={`${
                !nextPage
                  ? "text-gray-500 hover:text-gray-500"
                  : "text-white hover:text-red-750"
              }`}
              onClick={() => nextPage && fetchPlanets(nextPage)}
              disabled={!nextPage}
            >
              siguiente &gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};
