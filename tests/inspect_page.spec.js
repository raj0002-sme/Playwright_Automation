const { test, expect } = require('@playwright/test');

test('Inspect login page elements and perform form automation', async ({ page }) => {
  console.log('=== NAVIGATING TO LOGIN PAGE ===');
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/', { waitUntil: 'networkidle' });
  
  // Get all locators on login page
  console.log('\n=== LOGIN PAGE LOCATORS ===');
  
  const usernameInput = page.locator('[name="username"]');
  console.log('✓ Username input found:', await usernameInput.count() > 0);
  
  const passwordInput = page.locator('[name="password"]');
  console.log('✓ Password input found:', await passwordInput.count() > 0);
  
  const checkbox = page.locator('[type="checkbox"]');
  console.log('✓ Checkbox found:', await checkbox.count() > 0);
  
  const signInBtn = page.locator('input[type="submit"][value="Sign In"]');
  console.log('✓ Sign In button found:', await signInBtn.count() > 0);
  
  // Fill form
  console.log('\n=== FILLING FORM ===');
  await usernameInput.fill('rahulshettyacademy');
  console.log('✓ Filled username: rahulshettyacademy');
  
  await passwordInput.fill('learning');
  console.log('✓ Filled password: learning');
  
  await checkbox.check();
  console.log('✓ Checkbox checked');
  
  console.log('\n=== CLICKING SIGN IN ===');
  await signInBtn.click();
  
  // Wait for navigation
  try {
    await page.waitForURL('**/shop', { timeout: 10000 });
    console.log('✓ Navigated to shop page successfully');
  } catch (e) {
    console.log('Navigation timeout, trying alternate wait...');
    await page.waitForLoadState('networkidle');
  }
  
  console.log('\n=== SHOP PAGE ANALYSIS ===');
  console.log('Current URL:', page.url());
  
  // Get product locators
  const products = page.locator('div.card');
  const productCount = await products.count();
  console.log('Product cards found:', productCount);
  
  // List all product names
  console.log('\n=== ALL PRODUCTS ===');
  const productNames = [];
  for (let i = 0; i < Math.min(productCount, 20); i++) {
    const productName = await products.nth(i).locator('h4.card-title').textContent();
    const cleanedName = productName ? productName.trim() : 'Unknown';
    productNames.push(cleanedName);
    console.log(`Product ${i + 1}: ${cleanedName}`);
  }
  
  // Check for iPhone X
  console.log('\n=== SEARCHING FOR iPhone X ===');
  const hasIPhoneX = productNames.some(name => name.toLowerCase().includes('iphone x'));
  console.log('iPhone X is present:', hasIPhoneX);
  
  if (hasIPhoneX) {
    console.log('✓ iPhone X found in the product list!');
  } else {
    console.log('✗ iPhone X NOT found in the product list');
  }
});
