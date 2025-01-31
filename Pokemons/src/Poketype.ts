export interface Pokemon {
  id: number;
  name: string;
  type: string;
  base_experience: number;
}

export interface PokedexProps {
  pokemons: Pokemon[];
  total: number;
  iswinner: boolean;
}
