describe("PokeAPI Automated Tests", () => {
  let data: any;

  before(() => {
    cy.fixture("api").then((config) => {
      data = config;
    });
  });

  it("GET - Pikachu - Full ability object check with logging", () => {
    const expected = data.expectedResponses.pikachu;

    cy.request("GET", `${data.baseUrl}${data.endpoints.pikachu}`).then(
      (response) => {
        // Status code ellenőrzése
        expect(response.status).to.eq(expected.status);

        // Name ellenőrzése
        expect(response.body).to.have.property("name", expected.name);

        // Ability objektum ellenőrzése
        expected.abilities.forEach((expectedAbility: any) => {
          const found = response.body.abilities.find(
            (item: any) => item.ability.name === expectedAbility.ability.name,
          );

          expect(found).to.exist;

          // Teljes objektum összehasonlítás
          expect(found).to.deep.equal(expectedAbility);
        });
      },
    );
  });
});
