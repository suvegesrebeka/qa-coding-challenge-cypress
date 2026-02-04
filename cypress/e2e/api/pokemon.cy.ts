describe("PokeAPI Automated Tests", () => {
  let data: any;

  before(() => {
    cy.fixture("api").then((config) => {
      data = config;
    });
  });

  it("[POS] GET - Pikachu - Assert status and attributes", () => {
    const expected = data.pikachu.response;

    cy.request("GET", `${data.baseUrl}${data.pikachu.endpoint}`).then(
      (response) => {
        expect(response.status).to.eq(data.pikachu.response.status);
        expect(response.body).to.have.property("name", expected.name);

        expected.abilities.forEach((expectedAbility: any) => {
          const found = response.body.abilities.find(
            (item: any) => item.ability.name === expectedAbility.ability.name,
          );

          expect(found).to.exist;
          expect(found).to.deep.equal(expectedAbility);
        });
      },
    );
  });

  it("[NEG] GET - Charmander - 404 response mock", () => {
    // Mockoljuk a végpontot
    cy.intercept("GET", "https://pokeapi.co/api/v2/pokemon/charmander", {
      statusCode: 404,
      body: { error: "Not Found" },
    }).as("getCharmander");

    cy.window().then((win) => {
      return win
        .fetch("https://pokeapi.co/api/v2/pokemon/charmander")
        .then((res) =>
          res.json().then((body) => ({ status: res.status, body })),
        )
        .then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body.error).to.eq("Not Found");
        });
    });
  });
});
