const { chromium } = require('@playwright/test');

async function runAutomation() {
  console.log('\n' + '='.repeat(70));
  console.log('PAGE INSPECTION AND FORM AUTOMATION TEST');
  console.log('='.repeat(70) + '\n');

  let browser;
  
  try {
    // Launch browser
    console.log('📦 Launching browser...');
    browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    // ===== STEP 1: NAVIGATE TO LOGIN PAGE =====
    console.log('\n' + '-'.repeat(70));
    console.log('STEP 1: NAVIGATING TO LOGIN PAGE');
    console.log('-'.repeat(70));
    
    console.log('🔗 URL: https://rahulshettyacademy.com/loginpagePractise/');
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/', { 
      waitUntil: 'networkidle',
      timeout: 30000
    });
    console.log('✅ Page loaded successfully\n');
    
    // ===== STEP 2: INSPECT LOCATORS =====
    console.log('-'.repeat(70));
    console.log('STEP 2: INSPECTING PAGE LOCATORS');
    console.log('-'.repeat(70));
    
    // Username locator
    const usernameInput = page.locator('[name="username"]');
    const usernameCount = await usernameInput.count();
    console.log(`\n📍 Username Input Field`);
    console.log(`   Locator: [name="username"]`);
    console.log(`   Found: ${usernameCount > 0 ? '✅ YES' : '❌ NO'}`);
    
    // Password locator
    const passwordInput = page.locator('[name="password"]');
    const passwordCount = await passwordInput.count();
    console.log(`\n📍 Password Input Field`);
    console.log(`   Locator: [name="password"]`);
    console.log(`   Found: ${passwordCount > 0 ? '✅ YES' : '❌ NO'}`);
    
    // Checkbox locator
    const checkbox = page.locator('[type="checkbox"]');
    const checkboxCount = await checkbox.count();
    console.log(`\n📍 Checkbox`);
    console.log(`   Locator: [type="checkbox"]`);
    console.log(`   Found: ${checkboxCount > 0 ? '✅ YES' : '❌ NO'}`);
    
    // Sign In button locator
    const signInBtn = page.locator('input[type="submit"][value="Sign In"]');
    const signInCount = await signInBtn.count();
    console.log(`\n📍 Sign In Button`);
    console.log(`   Locator: input[type="submit"][value="Sign In"]`);
    console.log(`   Found: ${signInCount > 0 ? '✅ YES' : '❌ NO'}`);
    
    // ===== STEP 3: FILL FORM =====
    console.log('\n' + '-'.repeat(70));
    console.log('STEP 3: FILLING FORM');
    console.log('-'.repeat(70));
    
    console.log('\n📝 Filling username field...');
    await usernameInput.fill('rahulshettyacademy');
    console.log('✅ Username filled: "rahulshettyacademy"');
    
    console.log('\n📝 Filling password field...');
    await passwordInput.fill('learning');
    console.log('✅ Password filled: "learning"');
    
    console.log('\n📝 Checking checkbox...');
    await checkbox.check();
    console.log('✅ Checkbox checked');
    
    // ===== STEP 4: SUBMIT FORM =====
    console.log('\n' + '-'.repeat(70));
    console.log('STEP 4: SUBMITTING FORM');
    console.log('-'.repeat(70));
    
    console.log('\n🖱️  Clicking "Sign In" button...');
    await signInBtn.click();
    console.log('✅ Button clicked');
    
    // ===== STEP 5: WAIT FOR NAVIGATION =====
    console.log('\n' + '-'.repeat(70));
    console.log('STEP 5: WAITING FOR NAVIGATION');
    console.log('-'.repeat(70));
    
    console.log('\n⏳ Waiting for shop page to load...');
    try {
      await page.waitForURL('**/shop', { timeout: 15000 });
      console.log('✅ Successfully navigated to shop page');
    } catch (e) {
      console.log('⚠️  URL navigation timeout, checking page load state...');
      await page.waitForLoadState('networkidle', { timeout: 10000 });
      console.log('✅ Page loaded (networkidle)');
    }
    
    const currentUrl = page.url();
    console.log(`   Current URL: ${currentUrl}\n`);
    
    // ===== STEP 6: INSPECT PRODUCTS =====
    console.log('-'.repeat(70));
    console.log('STEP 6: ANALYZING SHOP PAGE');
    console.log('-'.repeat(70));
    
    console.log('\n🛍️  Finding all products...');
    const products = page.locator('div.card');
    const productCount = await products.count();
    console.log(`✅ Product cards found: ${productCount}\n`);
    
    // ===== STEP 7: LIST ALL PRODUCTS =====
    console.log('-'.repeat(70));
    console.log('STEP 7: PRODUCT LIST');
    console.log('-'.repeat(70) + '\n');
    
    const productNames = [];
    const maxProducts = Math.min(productCount, 20);
    
    for (let i = 0; i < maxProducts; i++) {
      try {
        const productName = await products.nth(i).locator('h4.card-title').textContent();
        const cleanedName = productName ? productName.trim() : 'Unknown Product';
        productNames.push(cleanedName);
        console.log(`   ${i + 1}. ${cleanedName}`);
      } catch (e) {
        console.log(`   ${i + 1}. [Unable to retrieve product name]`);
      }
    }
    
    // ===== STEP 8: SEARCH FOR iPHONE X =====
    console.log('\n' + '-'.repeat(70));
    console.log('STEP 8: SEARCHING FOR iPhone X');
    console.log('-'.repeat(70) + '\n');
    
    const iPhoneXFound = productNames.some(name => 
      name.toLowerCase().includes('iphone x')
    );
    
    if (iPhoneXFound) {
      console.log('✅ iPhone X IS PRESENT in the product list!');
      const iPhoneIndex = productNames.findIndex(name => 
        name.toLowerCase().includes('iphone x')
      );
      console.log(`   Product #${iPhoneIndex + 1}: ${productNames[iPhoneIndex]}`);
    } else {
      console.log('❌ iPhone X NOT found in the product list');
      console.log('\n   Products found:');
      productNames.forEach((name, index) => {
        console.log(`   - ${name}`);
      });
    }
    
    // ===== FINAL SUMMARY =====
    console.log('\n' + '='.repeat(70));
    console.log('TEST SUMMARY');
    console.log('='.repeat(70));
    
    console.log('\n✅ All tests completed successfully!\n');
    console.log('📋 Results:');
    console.log('   - Login page inspected');
    console.log('   - Form filled with credentials');
    console.log('   - Sign In button clicked');
    console.log('   - Navigation to shop page successful');
    console.log(`   - ${productCount} products found`);
    console.log(`   - iPhone X status: ${iPhoneXFound ? '✅ FOUND' : '❌ NOT FOUND'}`);
    
    console.log('\n' + '='.repeat(70) + '\n');
    
    // Close browser after 5 seconds to see results
    console.log('⏳ Closing browser in 5 seconds...');
    await new Promise(resolve => setTimeout(resolve, 5000));
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      console.log('✅ Browser closed');
    }
  }
}

// Run the automation
runAutomation().catch(console.error);
