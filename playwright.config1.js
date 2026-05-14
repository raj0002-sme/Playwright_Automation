// @ts-check
import { chromium, defineConfig, devices, expect } from '@playwright/test';
import { worker } from 'cluster';
import { timeLog } from 'console';
import { TIMEOUT } from 'dns';
import { permission } from 'process';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  retries :2,   // it will retry failed test 2 times 
  worker:3,  // this wil run 3 file in parallel once complete then it will pick next
  timeout : 40 *1000,
  expect : {
    timeout : 40 * 1000,
  },
  

  reporter: 'html',
  projects :[
    {
      name : 'chrome',
      use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    //ignoreHttpsErrors:true,  // to ignore https/ SSL error
    //permissions:['geolocations'],  // it allow geo location popups


    //trace : 'on', // if you want to create the zip for all test - pass/ fail
    trace : 'retain-on-failure' // if you wish to get the trace only on failure
  },

    },

    {
      name : 'safari',
      use: {
    browserName : 'webkit',
    headless : false,
    screenshot : 'on',
    ...devices['iPhone 11'],
    //trace : 'on', // if you want to create the zip for all test - pass/ fail
    trace : 'retain-on-failure' // if you wish to get the trace only on failure



  },
    }
  ]
 
};

module.exports = config;

