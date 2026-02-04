import { PokemonConfig } from "../types/pokemon";

export class PokemonService {
  private config: PokemonConfig;

  constructor(config: PokemonConfig) {
    this.config = config;
  }

  //GET request to fetch a Pokemon by its name
  getPokemon(endpoint: string) {
    return cy.request("GET", `${this.config.baseUrl}${endpoint}`);
  }

  // Fetch the mocked Pokemon data
  fetchPokemon(endpoint: String) {
    return cy.window().then((win) => {
      return win
        .fetch(`${this.config.baseUrl}${endpoint}`)
        .then((res) =>
          res.json().then((body) => ({ status: res.status, body })),
        );
    });
  }

  // MOCK for Negative Scenario - Pokemon not found
  mockPokemonNotFound(
    endpoint: string,
    errorMessage: string = "",
    statusCode: number = 404,
  ) {
    cy.intercept("GET", `${this.config.baseUrl}${endpoint}`, {
      statusCode: statusCode,
      body: { error: errorMessage },
    }).as("getPokemon");
  }
}
