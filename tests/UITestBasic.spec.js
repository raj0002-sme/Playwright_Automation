const {test, expect} = require('@playwright/test');

test('First playwrite test', async ({browser})=>
{

    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //await expect(page).toHaveTitle()
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    await page.locator("#terms").click();
    await page.locator("[type='submit']").click();
    console.log(await page.locator("(//a[@class='navbar-brand'])[2]").textContent());
    await expect(page.locator("(//a[@class='navbar-brand'])[2]")).toContainText('ProtoCommerce Home')
    // Find nth element/ first element/ 2nd element
   // console.log(await page.locator(".card-body h4 a").first().textContent());
    //console.log(await page.locator(".card-body h4 a").nth(1).textContent());

    // If you want to get all the item from the list of webelements then 
    // but the issue here is if you try to get it without wait it will return empty array
    // so just wait for the element to get loacted/loaded
   // page.waitForLoadState('networkidle'); // sometime it dosent work so best to ue waitfor()
    await page.locator(".card-body h4 a").last().waitFor();
    console.log(await page.locator(".card-body h4 a").allTextContents());

})

test('page playwright test', async ({page})=>
{
    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

})