const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.ottonova.de/online-beitragsrechner",
    includeShadowDom: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: {
      runMode: 2,
      openMode: 1, //cookies issue for the 1. run
    },
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on: any, config: any) {},
  },
});
