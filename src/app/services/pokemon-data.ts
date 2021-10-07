import { Ability, Pokemon, Type } from '../models/pokemon';

export interface PokemonData {
  id: string;
  name: string;
  url: string;
  height: string;
  weight: string;
  abilities: Ability[];
  types: Type[];
  stats: [
    {
      base_stat: number;
    }
  ];
  sprites: {
    front_default: string;
    front_female: string;
  };
  species: {
    url: string;
  };
}

export interface PokemonSpecie {
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
      };
    }
  ];
  gender_rate: number;
}

export interface DataList {
  next: string;
  results: PokemonData[];
}

export interface PokemonDataList {
  nextUrl: string;
  pokemons: Pokemon[];
}
