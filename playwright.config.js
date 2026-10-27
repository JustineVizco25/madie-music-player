const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    fullyParallel: true,
    workers: process.env.CI ? 2 : 3,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    reporter: 'list',
    use: {
        baseURL: 'http://127.0.0.1:4173',
        viewport: { width: 1280, height: 1000 },
        launchOptions: process.env.PLAYWRIGHT_CHROME_EXECUTABLE
            ? { executablePath: process.env.PLAYWRIGHT_CHROME_EXECUTABLE }
            : {},
        trace: 'retain-on-failure',
    },
    webServer: {
        command: 'npm start',
        url: 'http://127.0.0.1:4173',
        reuseExistingServer: !process.env.CI,
    },
});
