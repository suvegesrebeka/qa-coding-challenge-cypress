const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: 'https://www.ottonova.de/online-beitragsrechner',
     includeShadowDom: true,
    env: {
      apiUrl: 'https://pokeapi.co/api/v2/pokemon/pikachu ',
    },
    setupNodeEvents(on: any, config: any) {
    },
  },
});
