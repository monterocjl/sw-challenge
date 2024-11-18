import { usePerson } from "./hooks/usePerson";

export const Person = () => {
  const { person, loading } = usePerson();

  if (loading) return <div className='text-white'>Cargando...</div>;
  if (!person) return <div className='text-white'>Persona no encontrada</div>;

  return (
    <div className='p-8 bg-gradient-to-b from-black to-gray-900 min-h-screen text-white'>
      <h1 className='text-4xl font-bold mb-8'>{person.name}</h1>
      <p>
        <strong>Year of Birth:</strong> {person.birth_year}
      </p>
      <p>
        <strong>Gender:</strong> {person.gender}
      </p>
    </div>
  );
};
