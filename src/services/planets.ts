import { BASE_URL } from "@/config/apiConfig";
import { PlanetResponse, PlanetsResponse } from "@/types/planets";
import axios from "axios";

const PLANETS_ENDPOINT = `${BASE_URL}/planets/`;

export const getPlanets = async (
  url: string = PLANETS_ENDPOINT,
  searchTerm: string = ""
): Promise<PlanetsResponse> => {
  try {
    const response = await axios.get<PlanetsResponse>(
      `${url}${searchTerm ? `?search=${searchTerm}` : ""}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener la lista de planetas:", error);
    throw error;
  }
};

export const getPlanetById = async (id: string): Promise<PlanetResponse> => {
  try {
    const response = await axios.get<PlanetResponse>(
      `${PLANETS_ENDPOINT}${id}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener el detalle de un planeta:", error);
    throw error;
  }
};

export const getPlanetByUrl = async (url: string): Promise<PlanetResponse> => {
  try {
    const response = await axios.get<PlanetResponse>(url);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el detalle del planeta:", error);
    throw error;
  }
};
