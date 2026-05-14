import {test, expect} from '@playwright/test';

test('Check if element is visible', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.pause();
    //check if elelement is displayed of not 
    const bool = await page.locator("#displayed-text").isVisible()
    console.log(bool);
    await page.locator("[value='Hide']").click();
    const bool1 = await page.locator("#displayed-text").isHidden();
    console.log(bool1);

})

test('@smoke Handle alert', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.pause();
    //handle alert
    await page.on('dialog',dialog => dialog.accept()); ///this will on the dialog handle mode 
    await page.locator("#confirmbtn").click(); // this will open the dialog or popup
})

test.only('Handle frame', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.pause();
    //handle frame
    const frame_page = await page.frameLocator("#courses-iframe");   // switch to frame
    await frame_page.locator("a[href*='/learning-paths']").first().click(); // use frame page to locate element inside frame
    console.log(await frame_page.locator("h1.text-3xl").textContent());
})

// to mouse hover on any element 
// page.locator("<element on which you want to hover>").hover();