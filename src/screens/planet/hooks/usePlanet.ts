import { getPlanetById } from "@/services/planets";
import { PlanetResponse } from "@/types/planets";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const usePlanet = () => {
  const { id } = useParams<{ id: string }>();
  const [planet, setPlanet] = useState<PlanetResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanet = async () => {
      if (id) {
        try {
          const planetData = await getPlanetById(id);
          const residents = planetData.residents.map(
            (resident) => resident.split("/").filter(Boolean).pop()!
          );
          setPlanet({
            ...planetData,
            residents,
          });
        } catch (error) {
          console.error("Error al obtener los detalles:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPlanet();
  }, [id]);

  return {
    planet,
    loading,
  };
};
