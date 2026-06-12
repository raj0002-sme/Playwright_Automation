const { test, expect } = require('@playwright/test');
const { POManager } = require('../pageObjectPattern/POManager');

test('Login to Rahul Shetty Academy and verify iPhone X in shop page', { tag: ['@smoke'] }, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to login page
    const poManager = new POManager(page);
    const loginPagePractise = poManager.getLoginPagePractise();
    
    await loginPagePractise.navigateToLoginPage('https://rahulshettyacademy.com/loginpagePractise/');
    
    // Perform login
    await loginPagePractise.login('rahulshettyacademy', 'learning');
    
    // Wait for navigation to shop page
    await page.waitForURL('**/shop', { timeout: 10000 });
    
    // Verify current URL
    expect(page.url()).toContain('/angularpractice/shop');
    
    // Get shop page and verify iPhone X is present
    const shopPage = poManager.getShopPage();
    const iPhoneXPresent = await shopPage.isProductPresent('iPhone X');
    
    // Assert iPhone X product is present
    expect(iPhoneXPresent).toBeTruthy();
    
    // Get all products as additional verification
    const allProducts = await shopPage.getAllProductNames();
    console.log('All products on shop page:', allProducts);
    console.log('iPhone X found:', iPhoneXPresent);
    
    await context.close();
});
