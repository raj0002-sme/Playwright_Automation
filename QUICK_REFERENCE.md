# Quick Reference Card - Locators & Commands

## 🔍 LOGIN PAGE LOCATORS

### Username Input Field
```javascript
// Playwright
page.locator('[name="username"]')

// Selenium
driver.find_element(By.NAME, 'username')
driver.findElement(By.name('username'))

// Puppeteer
page.$('[name="username"]')
page.$$('[name="username"]')
```

### Password Input Field
```javascript
// Playwright
page.locator('[name="password"]')

// Selenium
driver.find_element(By.NAME, 'password')
driver.findElement(By.name('password'))

// Puppeteer
page.$('[name="password"]')
```

### Checkbox
```javascript
// Playwright
page.locator('[type="checkbox"]')

// Selenium
driver.find_element(By.CSS_SELECTOR, '[type="checkbox"]')
driver.find_element(By.XPATH, '//input[@type="checkbox"]')

// Puppeteer
page.$('[type="checkbox"]')
```

### Sign In Button
```javascript
// Playwright
page.locator('input[type="submit"][value="Sign In"]')

// Selenium
driver.find_element(By.XPATH, '//input[@type="submit"][@value="Sign In"]')

// Puppeteer
page.$('input[type="submit"][value="Sign In"]')
```

---

## 🛍️ SHOP PAGE LOCATORS

### All Products
```javascript
// Playwright
page.locator('div.card')

// Selenium
driver.find_elements(By.CLASS_NAME, 'card')
driver.find_elements(By.CSS_SELECTOR, 'div.card')

// Puppeteer
page.$$('div.card')
```

### Product Names
```javascript
// Playwright
page.locator('h4.card-title')
products.locator('h4.card-title')

// Selenium
driver.find_elements(By.CSS_SELECTOR, 'h4.card-title')

// Puppeteer
page.$$('h4.card-title')
```

### iPhone X (Text Search)
```javascript
// Playwright
page.locator('text=/iPhone X/i')
page.locator(':has-text("iPhone X")')

// Selenium
driver.find_element(By.XPATH, '//*[text()[contains(., "iPhone X")]]')
driver.find_element(By.XPATH, '//h4[contains(text(), "iPhone X")]')

// Puppeteer
page.$('text=/iPhone X/i')
```

### iPhone X (Title Element)
```javascript
// Playwright
page.locator('h4.card-title:has-text("iPhone X")')

// XPath
//h4[@class="card-title" and contains(text(), "iPhone X")]

// CSS (with specific parent)
div.card h4.card-title
```

---

## 📋 FORM FILLING PROCEDURE

### Step-by-Step Commands

```javascript
// 1. Navigate to login page
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

// 2. Fill username
await page.locator('[name="username"]').fill('rahulshettyacademy');

// 3. Fill password
await page.locator('[name="password"]').fill('learning');

// 4. Check checkbox
await page.locator('[type="checkbox"]').check();

// 5. Click Sign In
await page.locator('input[type="submit"][value="Sign In"]').click();

// 6. Wait for navigation
await page.waitForURL('**/shop');

// 7. Find iPhone X
const iPhoneX = page.locator('h4.card-title:has-text("iPhone X")');
const isFound = await iPhoneX.count() > 0;
console.log('iPhone X found:', isFound);
```

---

## 🧪 TEST COMMANDS

### Run Node Script Directly
```bash
node automation_test.js
```

### Run Playwright Test
```bash
npx playwright test tests/inspect_page.spec.js
```

### Run with Verbose Output
```bash
npx playwright test tests/inspect_page.spec.js --reporter=verbose
```

### Run with HTML Report
```bash
npx playwright test tests/inspect_page.spec.js --reporter=html
```

### View HTML Report
```bash
npx playwright show-report
```

---

## 📊 EXPECTED RESULTS

| Element | Locator | Status |
|---------|---------|--------|
| Username | `[name="username"]` | ✅ Found |
| Password | `[name="password"]` | ✅ Found |
| Checkbox | `[type="checkbox"]` | ✅ Found |
| Sign In | `input[type="submit"][value="Sign In"]` | ✅ Found |
| Products | `div.card` | ✅ Found (4-8) |
| iPhone X | Text search or title | ✅ **PRESENT** |

---

## 🎯 PRODUCT LIST STRUCTURE

```
Shop Page (https://rahulshettyacademy.com/angularpractice/shop)
│
├─ Product Card 1
│  ├─ Title: Blackberry
│  ├─ Price: $X.XX
│  └─ Add to Cart Button
│
├─ Product Card 2
│  ├─ Title: iPhone X  ✅ TARGET
│  ├─ Price: $X.XX
│  └─ Add to Cart Button
│
├─ Product Card 3
│  ├─ Title: Samsung Note 8
│  ├─ Price: $X.XX
│  └─ Add to Cart Button
│
└─ More Products...
```

---

## 🐛 DEBUGGING TIPS

### Print All Product Names
```javascript
const products = page.locator('div.card');
const count = await products.count();

for (let i = 0; i < count; i++) {
  const name = await products.nth(i).locator('h4.card-title').textContent();
  console.log(`Product ${i + 1}: ${name.trim()}`);
}
```

### Check if Element Exists
```javascript
const iPhoneXCount = await page.locator('h4.card-title:has-text("iPhone X")').count();
if (iPhoneXCount > 0) {
  console.log('✅ iPhone X found!');
} else {
  console.log('❌ iPhone X not found');
}
```

### Take Screenshot for Inspection
```javascript
await page.screenshot({ path: 'screenshot.png' });
```

### Get Full Page HTML
```javascript
const html = await page.content();
console.log(html);
```

### Check Network Activity
```javascript
page.on('request', request => console.log('>>', request.method(), request.url()));
page.on('response', response => console.log('<<', response.status(), response.url()));
```

---

## 📱 ALTERNATE LOCATOR STRATEGIES

If primary locators fail, try these alternatives:

### Username Alternatives
```
[name="username"]
input#username
input[placeholder*="User"]
input:first-of-type
```

### Password Alternatives
```
[name="password"]
input[type="password"]
input#password
```

### Sign In Alternatives
```
input[type="submit"][value="Sign In"]
input[value="Sign In"]
button:has-text("Sign In")
.btn-signin
[role="button"]:has-text("Sign In")
```

### Product Alternatives
```
div.card
[class*="card"]
.product-card
[class*="product"]
```

---

## ✅ VERIFICATION CHECKLIST

- [ ] Login page loads successfully
- [ ] Username field is fillable
- [ ] Password field is fillable
- [ ] Checkbox is clickable
- [ ] Sign In button is clickable
- [ ] Page navigates to shop after login
- [ ] Shop page displays products
- [ ] Product cards are retrievable
- [ ] Product names are readable
- [ ] iPhone X is present in list

---

## 🔗 URLS

| Page | URL |
|------|-----|
| Login | https://rahulshettyacademy.com/loginpagePractise/ |
| Shop | https://rahulshettyacademy.com/angularpractice/shop |

---

## 📝 CREDENTIALS

| Field | Value |
|-------|-------|
| Username | `rahulshettyacademy` |
| Password | `learning` |
| Checkbox | ✓ Check |

---

*Quick Reference v1.0 - Ready to Use*
