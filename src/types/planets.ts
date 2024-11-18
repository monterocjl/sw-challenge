export interface PlanetResponse {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[]; // URLs de los residentes
  films: string[]; // URLs de las películas
  created: string;
  edited: string;
  url: string;
}

export interface PlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PlanetResponse[];
}
