const {test,expect} = require('@playwright/test');
const path = require('path');

test('take screenshot', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.screenshot({path : 'fullpagescreenshit.jpg'}); // ful page ss

    await page.locator("#displayed-text").screenshot({path : 'elementSS.jpeg'});

    await page.locator("[value='Confirm']").click();
    await page.screenshot({path : 'popupScreenshot.jpg'}); // full window ss


})

// so in visual test it takes a screenshot of the page and saves it to a folder from next run---
// it excatly compares the scrren shot from saved ss to newly taken ss and shows the difference if any

test.only('Visual test', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 720 });

  await page.goto(
    "https://rahulshettyacademy.com/AutomationPractice/",
    { waitUntil: 'networkidle' }
  );

  await expect(page).toHaveScreenshot('rahulshettypage.png');
});