export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonResponse {
  status: number;
  name?: string;
  abilities: Ability[];
  error?: string;
}

export interface PokemonConfig {
  baseUrl: string;
  pikachu: {
    endpoint: string;
    response: PokemonResponse;
  };
  charmander: {
    endpoint: string;
    response: PokemonResponse;
  };
}
