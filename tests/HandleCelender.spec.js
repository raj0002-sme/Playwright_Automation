const {test, expect} = require('@playwright/test')

test('Calander handling', async({browser}) =>{
    const day = "10";
    const month = "9"
    const year= "2027";
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator("div.react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months button").nth(Number(month)-1).click();
    await page.locator(".react-calendar__tile.react-calendar__month-view__days__day:not(.react-calendar__month-view__days__day--neighboringMonth)").nth(Number(day)).click();

    await page.pause();


})