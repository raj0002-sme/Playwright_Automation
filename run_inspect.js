#!/usr/bin/env node

const { chromium } = require('@playwright/test');

(async () => {
  let browser;
  try {
    browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    console.log('=== NAVIGATING TO LOGIN PAGE ===');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/', { waitUntil: 'networkidle' });
    
    // Get all locators on login page
    console.log('\n=== LOGIN PAGE LOCATORS ===');
    
    const usernameInput = page.locator('[name="username"]');
    const usernameExists = await usernameInput.count() > 0;
    console.log('✓ Username input found:', usernameExists);
    if (usernameExists) {
      console.log('  Locator: [name="username"]');
    }
    
    const passwordInput = page.locator('[name="password"]');
    const passwordExists = await passwordInput.count() > 0;
    console.log('✓ Password input found:', passwordExists);
    if (passwordExists) {
      console.log('  Locator: [name="password"]');
    }
    
    const checkbox = page.locator('[type="checkbox"]');
    const checkboxExists = await checkbox.count() > 0;
    console.log('✓ Checkbox found:', checkboxExists);
    if (checkboxExists) {
      console.log('  Locator: [type="checkbox"]');
    }
    
    const signInBtn = page.locator('input[type="submit"][value="Sign In"]');
    const signInExists = await signInBtn.count() > 0;
    console.log('✓ Sign In button found:', signInExists);
    if (signInExists) {
      console.log('  Locator: input[type="submit"][value="Sign In"]');
    }
    
    // Fill form
    console.log('\n=== FILLING FORM ===');
    await usernameInput.fill('rahulshettyacademy');
    console.log('✓ Username filled: rahulshettyacademy');
    
    await passwordInput.fill('learning');
    console.log('✓ Password filled: learning');
    
    await checkbox.check();
    console.log('✓ Checkbox checked');
    
    console.log('\n=== CLICKING SIGN IN ===');
    await signInBtn.click();
    console.log('✓ Sign In button clicked');
    
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
    console.log('\n=== ALL PRODUCTS LIST ===');
    const productNames = [];
    for (let i = 0; i < Math.min(productCount, 20); i++) {
      try {
        const productName = await products.nth(i).locator('h4.card-title').textContent();
        const cleanedName = productName ? productName.trim() : 'Unknown';
        productNames.push(cleanedName);
        console.log(`${i + 1}. ${cleanedName}`);
      } catch (e) {
        console.log(`${i + 1}. (Unable to retrieve)`);
      }
    }
    
    // Check for iPhone X
    console.log('\n=== SEARCHING FOR iPhone X ===');
    const hasIPhoneX = productNames.some(name => name.toLowerCase().includes('iphone x'));
    
    if (hasIPhoneX) {
      console.log('✓ iPhone X IS PRESENT in the product list!');
    } else {
      console.log('✗ iPhone X NOT found in the product list');
      console.log('Available products:', productNames.join(', '));
    }
    
    await page.close();
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
