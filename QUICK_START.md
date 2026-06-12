# 🚀 Quick Start Guide

## What Was Created

Three files have been created following your existing Playwright framework standards:

### 1. LoginPagePractise.js (Page Object)
```javascript
Location: pageObjectPattern/LoginPagePractise.js
Purpose: Handles login page interactions
```

### 2. ShopPage.js (Page Object)
```javascript
Location: pageObjectPattern/ShopPage.js
Purpose: Handles shop page verification and product searches
```

### 3. Test File
```javascript
Location: tests/loginPractise_ShopPageVerification.spec.js
Purpose: Complete end-to-end test for login and product verification
```

---

## Test Flow

```
┌─────────────────────────────────────────────────────┐
│ Navigate to Login Page                              │
│ https://rahulshettyacademy.com/loginpagePractise/  │
└────────────────────┬────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────┐
│ Enter Credentials                                   │
│ Username: rahulshettyacademy                        │
│ Password: learning                                  │
│ ✓ Check Checkbox                                    │
└────────────────────┬────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────┐
│ Click Sign In Button                                │
└────────────────────┬────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────┐
│ Wait for Page Navigation                            │
│ URL: https://rahulshettyacademy.com/angularpractice/shop
└────────────────────┬────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────┐
│ Verify iPhone X Product Present                     │
│ ✓ Product Found - Test Passes                       │
└─────────────────────────────────────────────────────┘
```

---

## Quick Run Commands

### Basic Test Run
```bash
npx playwright test tests/loginPractise_ShopPageVerification.spec.js
```

### See Browser (Headed Mode)
```bash
npx playwright test tests/loginPractise_ShopPageVerification.spec.js --headed
```

### With Console Output
```bash
npx playwright test tests/loginPractise_ShopPageVerification.spec.js --reporter=list
```

### Generate Allure Report
```bash
npx playwright test tests/loginPractise_ShopPageVerification.spec.js --reporter=line,allure-playwright
```

---

## File Locations

```
PLAYWRITEAUTOMATION/
├── pageObjectPattern/
│   ├── LoginPagePractise.js          ← NEW
│   ├── ShopPage.js                   ← NEW
│   ├── POManager.js                  ← UPDATED
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── CartPage.js
│   ├── PaymentPage.js
│   └── OrderPage.js
└── tests/
    ├── loginPractise_ShopPageVerification.spec.js   ← NEW TEST
    ├── end-to-end-ecomerce_PO.spec.js
    └── ... other test files
```

---

## Locators Used

| Element | Selector |
|---------|----------|
| Username | `[name="username"]` |
| Password | `[name="password"]` |
| Checkbox | `[type="checkbox"]` |
| Sign In | `input[type="submit"][value="Sign In"]` |
| Products | `div.card` |
| Product Names | `h4.card-title` |

---

## Assertions Verified

✅ Page navigated to shop page URL  
✅ iPhone X product is present  
✅ All products logged for verification  

---

## Test Metadata

- **Test Name**: Login to Rahul Shetty Academy and verify iPhone X in shop page
- **Tag**: @smoke
- **Status**: ✅ Ready to Run
- **Framework**: Playwright with Page Object Model

---

## Integration with Framework

The test integrates seamlessly with your existing framework:

```javascript
// Uses POManager just like existing tests
const poManager = new POManager(page);
const loginPagePractise = poManager.getLoginPagePractise();
const shopPage = poManager.getShopPage();

// Follows same structure as end-to-end-ecomerce_PO.spec.js
test('test description', { tag: ['@smoke'] }, async ({ browser }) => {
    // Test code
});
```

---

## ✨ Everything is Ready!

Simply run:
```bash
npx playwright test tests/loginPractise_ShopPageVerification.spec.js
```

And watch the test execute automatically! 🎯
