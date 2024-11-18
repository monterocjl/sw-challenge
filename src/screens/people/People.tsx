import { Link } from "react-router-dom";
import { usePeople } from "./hooks/usePeople";

export const People = () => {
  const {
    people,
    previousPage,
    nextPage,
    loading,
    fetchPeople,
    handleSearch,
    inputValue,
    setInputValue,
  } = usePeople();

  return (
    <div className='mx-0 md:mx-12 my-6'>
      <div className='flex justify-between flex-col md:flex-row gap-8'>
        <h1 className='text-4xl font-bold'>PEOPLE</h1>

        <div className='flex h-fit gap-2'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder='Search'
            className='w-full md:w-fit p-2 text-white bg-white rounded-md focus:outline-none'
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
            {people.map((person) => (
              <Link
                key={person.url}
                to={`/people/${person.id}`}
                className='bg-blue-950 border-[3px] border-red-750 p-4 rounded-lg flex flex-col justify-between'
              >
                <h2 className='text-xl font-bold'>{person.name}</h2>
                <p>
                  Year of birth:{" "}
                  <span className='font-bold'>{person.birth_year}</span>
                </p>
                <p>
                  Gender: <span className='font-bold'>{person.gender}</span>
                </p>
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
              onClick={() => previousPage && fetchPeople(previousPage)}
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
              onClick={() => nextPage && fetchPeople(nextPage)}
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
