const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // <--- important!
  reporter: [['html', { outputFolder: 'playwright-report', open: 'on-failure' }]],
  use: {
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure'
  }
});
