// @ts-check
import { chromium, defineConfig, devices, expect } from '@playwright/test';
import { timeLog } from 'console';
import { TIMEOUT } from 'dns';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  timeout : 40 *1000,
  expect : {
    timeout : 40 * 1000,
  },
  

  reporter: 'html',
  use: {
    browserName : 'chromium',
    headless : true,
    screenshot : 'on',
    //trace : 'on', // if you want to create the zip for all test - pass/ fail
    trace : 'retain-on-failure' // if you wish to get the trace only on failure


  },
};

module.exports = config;

