import { getStarshipById } from "@/services/starships";
import { StarshipResponse } from "@/types/starships";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const usePlanet = () => {
  const { id } = useParams<{ id: string }>();
  const [starship, setStarship] = useState<StarshipResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanet = async () => {
      if (id) {
        try {
          const starshipData = await getStarshipById(id);
          setStarship(starshipData);
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
    starship,
    loading,
  };
};
