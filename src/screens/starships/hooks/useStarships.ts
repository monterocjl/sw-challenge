import { getStarships } from "@/services/starships";
import { useEffect, useState } from "react";

type Starship = {
  id: string;
  name: string;
  model: string;
  length: string;
  url: string;
};

export const useStarships = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const fetchStarships = async (url?: string, search: string = "") => {
    setLoading(true);
    try {
      const data = await getStarships(url ?? undefined, search);
      const filtered = data.results.map((starship) => ({
        id: starship.url.split("/").filter(Boolean).pop()!,
        name: starship.name,
        model: starship.model,
        length: starship.length,
        url: starship.url,
      }));
      setStarships(filtered);
      setNextPage(data.next);
      setPreviousPage(data.previous);
    } catch (error) {
      console.error("Error al obtener naves:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchStarships(undefined, inputValue);
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  return {
    starships,
    previousPage,
    nextPage,
    loading,
    fetchStarships,
    handleSearch,
    inputValue,
    setInputValue,
  };
};
