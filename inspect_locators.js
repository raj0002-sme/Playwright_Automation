const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  console.log('=== NAVIGATING TO LOGIN PAGE ===');
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/', { waitUntil: 'networkidle' });
  
  // Get all locators on login page
  console.log('\n=== LOGIN PAGE LOCATORS ===');
  
  const usernameInput = page.locator('[name="username"]');
  console.log('Username input found:', await usernameInput.count() > 0);
  
  const passwordInput = page.locator('[name="password"]');
  console.log('Password input found:', await passwordInput.count() > 0);
  
  const checkbox = page.locator('[type="checkbox"]');
  console.log('Checkbox found:', await checkbox.count() > 0);
  
  const signInBtn = page.locator('input[type="submit"][value="Sign In"]');
  console.log('Sign In button found:', await signInBtn.count() > 0);
  
  // Fill form
  await usernameInput.fill('rahulshettyacademy');
  await passwordInput.fill('learning');
  await checkbox.check();
  
  console.log('\n=== CLICKING SIGN IN ===');
  await signInBtn.click();
  
  // Wait for navigation
  try {
    await page.waitForURL('**/shop', { timeout: 10000 });
    console.log('Navigated to shop page successfully');
  } catch (e) {
    console.log('Navigation timeout, trying alternate wait...');
    await page.waitForLoadState('networkidle');
  }
  
  console.log('\n=== SHOP PAGE LOCATORS ===');
  console.log('Current URL:', page.url());
  
  // Get product locators
  const products = page.locator('div.card');
  console.log('Product cards found:', await products.count());
  
  // List all product names
  for (let i = 0; i < Math.min(await products.count(), 10); i++) {
    const productName = await products.nth(i).locator('h4.card-title').textContent();
    console.log('Product', i + 1, ':', productName);
  }
  
  // Check for iPhone X
  const iPhoneXElements = page.locator('text=/iPhone X/i');
  console.log('\niPhone X text elements found:', await iPhoneXElements.count());
  
  // Try alternative selectors
  const allText = await page.locator('*').allTextContents();
  const hasIphone = allText.some(text => text.includes('iPhone'));
  console.log('Page contains iPhone:', hasIphone);
  
  await browser.close();
})();
