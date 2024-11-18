import { getPersonById } from "@/services/people";
import { PersonResponse } from "@/types/people";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const usePerson = () => {
  const { id } = useParams<{ id: string }>();
  const [person, setPerson] = useState<PersonResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerson = async () => {
      if (id) {
        try {
          const data = await getPersonById(id);
          setPerson(data);
        } catch (error) {
          console.error("Error al obtener los detalles de la persona:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPerson();
  }, [id]);
  return {
    person,
    loading,
  };
};
