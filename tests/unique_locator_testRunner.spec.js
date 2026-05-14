const {test, expect} = require('@playwright/test')

//Here we will learn how to loacte element using getbylabal and perform action on it
// this will be mailny on redio button/ checkbox/ select dropdown
test('getBylabal locator', async({browser})=>{

    const context=  await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    // this  will click on the checkbok though we are not passing the checkbox path
    // its unique to palywright
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").click();
    // it work with dropdown as well but it should be select dropdown
    // and you need to use select opetion funtion to select the option
    await page.getByLabel("Gender").selectOption("Female");

    await page.pause();



    


})