import { PokemonService } from "../../support/services/pokemon.service";
import { Ability, PokemonConfig } from "../../support/types/pokemon";

let data: PokemonConfig;
let pokemonService: PokemonService;

before(() => {
  cy.fixture("api").then((config) => {
    data = config;
    pokemonService = new PokemonService(data);
  });
});

describe("PokeAPI Automated Tests", () => {
  // This test verifies that a GET request to the Pikachu endpoint:
  // Returns the correct HTTP status code
  // Contains the expected Pokemon name and abilities in the response body
  it("GET - should return Pikachu with correct status and abilities", () => {
    const expected = data.pikachu.response;

    pokemonService.getPokemon(data.pikachu.endpoint).then((response) => {
      expect(response.status).to.eq(expected.status);
      expect(response.body).to.have.property("name", expected.name);

      expected.abilities.forEach((expectedAbility: Ability) => {
        expect(response.body.abilities).to.deep.include(expectedAbility);
      });
    });
  });

  // This test simulates a 404 error when requesting a non-existing Pokemon:
  // Intercepts the GET request and mocks a 404 response
  // Verifies that the response contains the correct status code and error message
  it("GET - MOCK - should return 404 for non-existing Charmander", () => {
    pokemonService.mockPokemonNotFound(
      data.charmander.endpoint,
      data.charmander.response.error,
      data.charmander.response.status,
    );

    pokemonService.fetchPokemon(data.charmander.endpoint).then((response) => {
      expect(response.status).to.eq(data.charmander.response.status);
      expect(response.body.error).to.eq(data.charmander.response.error);
    });
  });
});
