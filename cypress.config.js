const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'a8uptz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
