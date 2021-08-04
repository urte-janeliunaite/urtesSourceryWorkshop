// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
        headless: false,
        screenshot: 'on',
        launchOptions: {
            slowMo: 1000,
        },
    },
};
  
  module.exports = config;