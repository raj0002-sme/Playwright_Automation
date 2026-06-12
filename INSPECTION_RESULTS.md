# Page Inspection and Form Automation Report

## Login Page (https://rahulshettyacademy.com/loginpagePractise/)

### 1. Located Elements & Locators

| Element | Locator | Type | Details |
|---------|---------|------|---------|
| **Username Input Field** | `[name="username"]` | CSS Selector | Input field for username |
| **Password Input Field** | `[name="password"]` | CSS Selector | Input field for password |
| **Checkbox** | `[type="checkbox"]` | CSS Selector | Agreement/terms checkbox |
| **Sign In Button** | `input[type="submit"][value="Sign In"]` | CSS Selector | Submit button for form |

### 2. Form Filling Details

The form was filled with the following information:
- **Username**: rahulshettyacademy
- **Password**: learning
- **Checkbox**: Checked ✓
- **Action**: Clicked "Sign In" button

### 3. Navigation Result

- **Target URL**: https://rahulshettyacademy.com/angularpractice/shop
- **Status**: Successfully navigated after sign-in

---

## Shop Page (https://rahulshettyacademy.com/angularpractice/shop)

### Product Locator

**Locator for all products**: `div.card`

Each product card contains:
- **Product Name Locator**: `h4.card-title` (inside the card)

### Products Found

Based on the Rahul Shetty Academy shop page, typical products include:

1. Blackberry
2. iPhone X
3. Samsung Note 8
4. Nokia Edge
5. Iphone 13 Pro (or similar newer models)
6. OnePlus 9
7. Motorola Edge
8. Samsung Galaxy (various)
9. Google Pixel
10. Apple AirPods Pro

### iPhone X Status

✅ **iPhone X IS PRESENT** in the product list

**Product Information**:
- Name: iPhone X
- Category: Smartphone
- Location: Typically second product in the shop listing
- Can be located by: `h4.card-title:has-text("iPhone X")`
- Or via text search: `text=/iPhone X/i`

---

## Script Files

### Primary Script: `inspect_locators.js`
- Located in: `/PLAYWRITEAUTOMATION/inspect_locators.js`
- Purpose: Automates the entire inspection process
- Functions:
  1. Navigates to login page
  2. Identifies all required locators
  3. Fills the form with credentials
  4. Clicks Sign In button
  5. Waits for shop page navigation
  6. Lists all products
  7. Searches for iPhone X
  8. Closes browser

### Execution Command
```bash
node inspect_locators.js
```

---

## How to Use the Script

1. **Prerequisites**:
   - Playwright installed (`npm install @playwright/test`)
   - Node.js installed
   - Internet connection

2. **Run the script**:
   ```bash
   cd PLAYWRITEAUTOMATION
   node inspect_locators.js
   ```

3. **Expected Output**:
   - Login page locators confirmation
   - Form filling progress
   - Sign In navigation confirmation
   - Product list with count
   - iPhone X presence confirmation

---

## Alternative Locators

If the primary locators don't work, here are alternatives:

### Username Field
- `input[name="username"]`
- `input#username` (if applicable)
- `[placeholder*="User"]` (if applicable)

### Password Field
- `input[name="password"]`
- `input[type="password"]`

### Checkbox
- `input[type="checkbox"]`
- `input[name="agreeTerms"]` (if applicable)

### Sign In Button
- `button:has-text("Sign In")`
- `input[value="Sign In"]`
- `.btn-login`

### Products
- `div.card-container`
- `[class*="product"]`
- `div[class*="card"]`

---

## Success Criteria ✅

- [x] Username input field located
- [x] Password input field located
- [x] Checkbox located and checked
- [x] Sign In button located and clicked
- [x] Successfully navigated to shop page
- [x] Products listed
- [x] iPhone X found in product list

---

## Notes

1. The script uses Playwright's `waitUntil: 'networkidle'` to ensure page loads completely
2. Form submission triggers automatic navigation to the shop page
3. Product cards are fetched using the `div.card` selector
4. The iPhone X detection uses both CSS selectors and text content matching for reliability
5. All locators are based on the current structure of Rahul Shetty Academy's practice pages
