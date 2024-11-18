import { getPeople } from "@/services/people";
import { useEffect, useState } from "react";

type Person = {
  id: string;
  name: string;
  birth_year: string;
  gender: string;
  url: string;
};

export const usePeople = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const fetchPeople = async (url?: string, search: string = "") => {
    setLoading(true);
    try {
      const data = await getPeople(url ?? undefined, search);
      const filtered = data.results.map((person) => ({
        id: person.url.split("/").filter(Boolean).pop()!,
        name: person.name,
        birth_year: person.birth_year,
        gender: person.gender,
        url: person.url,
      }));
      setPeople(filtered);
      setNextPage(data.next);
      setPreviousPage(data.previous);
    } catch (error) {
      console.error("Error al obtener personas:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchPeople(undefined, inputValue);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return {
    people,
    previousPage,
    nextPage,
    loading,
    fetchPeople,
    handleSearch,
    inputValue,
    setInputValue,
  };
};
