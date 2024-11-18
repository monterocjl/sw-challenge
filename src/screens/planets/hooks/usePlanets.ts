import { getPlanets } from "@/services/planets";
import { useEffect, useState } from "react";

type Planet = {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  url: string;
};

export const usePlanets = () => {
  const [planet, setPlanet] = useState<Planet[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const fetchPlanets = async (url?: string, search: string = "") => {
    setLoading(true);
    try {
      const data = await getPlanets(url ?? undefined, search);
      const filtered = data.results.map((planet) => ({
        id: planet.url.split("/").filter(Boolean).pop()!,
        name: planet.name,
        climate: planet.climate,
        terrain: planet.terrain,
        url: planet.url,
      }));
      setPlanet(filtered);
      setNextPage(data.next);
      setPreviousPage(data.previous);
    } catch (error) {
      console.error("Error al obtener planetas:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchPlanets(undefined, inputValue);
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return {
    planet,
    previousPage,
    nextPage,
    loading,
    fetchPlanets,
    handleSearch,
    inputValue,
    setInputValue,
  };
};
