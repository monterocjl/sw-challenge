import { getPersonById } from "@/services/people";
import { getPlanetByUrl } from "@/services/planets";
import { PersonResponse } from "@/types/people";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

type PlanetResume = {
  id: string;
  name: string;
  climate: string;
  terrain: string;
};

export const usePerson = () => {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<PersonResponse | null>(null);
  const [homeworld, setHomeworld] = useState<PlanetResume | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonAndPlanet = async () => {
      if (id) {
        try {
          const personData = await getPersonById(id);
          setPerson(personData);

          if (personData.homeworld) {
            const planetData = await getPlanetByUrl(personData.homeworld);
            setHomeworld({
              id: planetData.url.split("/").filter(Boolean).pop()!,
              name: planetData.name,
              climate: planetData.climate,
              terrain: planetData.terrain,
            });
          }
        } catch (error) {
          console.error("Error al obtener los detalles:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPersonAndPlanet();
  }, [id]);

  return {
    person,
    homeworld,
    loading,
  };
};
