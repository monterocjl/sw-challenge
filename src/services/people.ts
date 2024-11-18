import axios from "axios";
import { BASE_URL } from "../config/apiConfig";
import { PeopleResponse, PersonResponse } from "@/types/people";

const PEOPLE_ENDPOINT = `${BASE_URL}/people/`;

export const getPeople = async (
  url: string = PEOPLE_ENDPOINT,
  searchTerm: string = ""
): Promise<PeopleResponse> => {
  try {
    const response = await axios.get<PeopleResponse>(
      `${url}${searchTerm ? `?search=${searchTerm}` : ""}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener la lista de personas:", error);
    throw error;
  }
};

export const getPersonById = async (id: string): Promise<PersonResponse> => {
  try {
    const response = await axios.get<PersonResponse>(
      `${PEOPLE_ENDPOINT}${id}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener el detalle de una persona:", error);
    throw error;
  }
};
