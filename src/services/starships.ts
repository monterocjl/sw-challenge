import { BASE_URL } from "@/config/apiConfig";
import { StarshipsResponse, StarshipResponse } from "@/types/starships";
import axios from "axios";

const STARSHIPS_ENDPOINT = `${BASE_URL}/starships/`;

export const getStarships = async (
  url: string = STARSHIPS_ENDPOINT,
  searchTerm: string = ""
): Promise<StarshipsResponse> => {
  try {
    const response = await axios.get<StarshipsResponse>(
      `${url}${searchTerm ? `?search=${searchTerm}` : ""}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener la lista de naves:", error);
    throw error;
  }
};

export const getStarshipById = async (
  id: string
): Promise<StarshipResponse> => {
  try {
    const response = await axios.get<StarshipResponse>(
      `${STARSHIPS_ENDPOINT}${id}/`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener el detalle de una nave:", error);
    throw error;
  }
};
