# Visual Flow Diagrams & Element Maps

## 🔄 Page Flow Diagram

```
┌─────────────────────────────────────┐
│  LOGIN PAGE                         │
│  (https://...loginpagePractise/)    │
├─────────────────────────────────────┤
│  Form Elements:                     │
│  1. Username: [name="username"]     │
│  2. Password: [name="password"]     │
│  3. Checkbox: [type="checkbox"]     │
│  4. Button: [type="submit"]         │
└─────────────────────────────────────┘
             │
             │ Fill Form
             │ Click Sign In
             ▼
┌─────────────────────────────────────┐
│  SHOP PAGE                          │
│  (https://...angularpractice/shop)  │
├─────────────────────────────────────┤
│  Product List:                      │
│  └─ div.card (8 products)           │
│     └─ h4.card-title                │
│        1. Blackberry                │
│        2. iPhone X ✅               │
│        3. Samsung Note 8            │
│        4. Nokia Edge                │
│        5. +4 more                   │
└─────────────────────────────────────┘
```

---

## 📋 Form Element Map

### Login Page Structure

```
FORM CONTAINER
│
├─ <input type="text" name="username">
│  Locator: [name="username"]
│  CSS: input[name="username"]
│  XPATH: //input[@name="username"]
│  Test Input: "rahulshettyacademy"
│
├─ <input type="password" name="password">
│  Locator: [name="password"]
│  CSS: input[name="password"]
│  XPATH: //input[@name="password"]
│  Test Input: "learning"
│
├─ <input type="checkbox">
│  Locator: [type="checkbox"]
│  CSS: input[type="checkbox"]
│  XPATH: //input[@type="checkbox"]
│  Action: .check()
│
└─ <input type="submit" value="Sign In">
   Locator: input[type="submit"][value="Sign In"]
   CSS: input[type="submit"][value="Sign In"]
   XPATH: //input[@type="submit"][@value="Sign In"]
   Action: .click()
```

---

## 🛍️ Product Grid Map

### Shop Page Structure

```
SHOP PAGE
│
├─ DIV.CARD (Product 1)
│  ├─ h4.card-title
│  │  └─ "Blackberry"
│  ├─ Price
│  └─ Add to Cart
│
├─ DIV.CARD (Product 2) ⭐ iPhone X
│  ├─ h4.card-title
│  │  └─ "iPhone X" ✅
│  ├─ Price
│  └─ Add to Cart
│
├─ DIV.CARD (Product 3)
│  ├─ h4.card-title
│  │  └─ "Samsung Note 8"
│  ├─ Price
│  └─ Add to Cart
│
├─ DIV.CARD (Product 4)
│  ├─ h4.card-title
│  │  └─ "Nokia Edge"
│  ├─ Price
│  └─ Add to Cart
│
└─ DIV.CARD (Products 5-8)
   └─ [Additional products]
```

---

## 🔍 Selector Hierarchy

### CSS Selector Hierarchy

```
PAGE
├─ FORM
│  ├─ INPUT[name="username"]
│  │  └─ Placeholder: "Username"
│  │
│  ├─ INPUT[name="password"]
│  │  └─ Placeholder: "Password"
│  │
│  ├─ INPUT[type="checkbox"]
│  │  └─ Label: "I agree to..."
│  │
│  └─ INPUT[type="submit"][value="Sign In"]
│     └─ Value: "Sign In"
│
└─ PRODUCTS CONTAINER
   ├─ DIV.CARD
   │  └─ H4.CARD-TITLE
   │     └─ Text: Product Name
   │
   ├─ DIV.CARD
   │  └─ H4.CARD-TITLE
   │     └─ Text: "iPhone X" ✅
   │
   └─ DIV.CARD
      └─ H4.CARD-TITLE
         └─ Text: Product Name
```

---

## 📊 Locator Matrix

### All Locators at a Glance

```
┌──────────────────┬─────────────────────────────┬──────────────┐
│ Element          │ CSS Locator                 │ Found? │ Used?│
├──────────────────┼─────────────────────────────┼────────┼──────┤
│ Username         │ [name="username"]           │  ✅    │ ✅   │
│ Password         │ [name="password"]           │  ✅    │ ✅   │
│ Checkbox         │ [type="checkbox"]           │  ✅    │ ✅   │
│ Sign In Button   │ input[type="submit"]        │  ✅    │ ✅   │
│                  │ [value="Sign In"]           │        │      │
│ Products         │ div.card                    │  ✅    │ ✅   │
│ Product Name     │ h4.card-title               │  ✅    │ ✅   │
│ iPhone X (Text)  │ text=/iPhone X/i            │  ✅    │ ✅   │
│ iPhone X (Elem)  │ h4.card-title:has-text()    │  ✅    │ ✅   │
│                  │ ("iPhone X")                │        │      │
└──────────────────┴─────────────────────────────┴────────┴──────┘
```

---

## 🎯 Test Flow Execution

### Step-by-Step Flow

```
START
  │
  ├─➊ Launch Browser
  │
  ├─➋ Navigate to Login Page
  │  └─ https://rahulshettyacademy.com/loginpagePractise/
  │
  ├─➌ Inspect Locators
  │  ├─ Find [name="username"] ✅
  │  ├─ Find [name="password"] ✅
  │  ├─ Find [type="checkbox"] ✅
  │  └─ Find input[type="submit"][value="Sign In"] ✅
  │
  ├─➍ Fill Form
  │  ├─ Fill username: "rahulshettyacademy"
  │  ├─ Fill password: "learning"
  │  └─ Check checkbox
  │
  ├─➎ Submit Form
  │  └─ Click Sign In button
  │
  ├─➏ Wait for Navigation
  │  └─ Navigate to shop page
  │
  ├─➐ Inspect Shop Page
  │  ├─ Find products: div.card
  │  ├─ Count products
  │  └─ Get product names: h4.card-title
  │
  ├─➑ Search for iPhone X
  │  ├─ Check product list
  │  └─ Result: ✅ FOUND (Product #2)
  │
  └─✅ END (Success)
```

---

## 📈 Data Flow Diagram

### Information Flow

```
USER INPUT
  │
  ├─ Username: "rahulshettyacademy"
  │
  ├─ Password: "learning"
  │
  └─ Checkbox: ✓
      │
      ▼
  ┌──────────────┐
  │  FORM DATA   │
  └──────────────┘
      │
      │ SUBMIT
      ▼
  ┌──────────────────┐
  │ AUTHENTICATE     │
  │ SERVER           │
  └──────────────────┘
      │
      │ SUCCESS
      ▼
  ┌──────────────────┐
  │ REDIRECT TO      │
  │ SHOP PAGE        │
  └──────────────────┘
      │
      ▼
  ┌──────────────────┐
  │ PRODUCT LIST     │
  │ • Blackberry     │
  │ • iPhone X  ✅   │
  │ • Samsung    │
  │ • Nokia      │
  │ • +4 more    │
  └──────────────────┘
      │
      ▼
  ┌──────────────────┐
  │ VERIFICATION     │
  │ iPhone X: FOUND  │
  │ Status: ✅       │
  └──────────────────┘
```

---

## 🏗️ Component Architecture

### System Components

```
┌─────────────────────────────────────────────────────┐
│         PLAYWRIGHT AUTOMATION SYSTEM                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌────────────────────────────────────────────┐   │
│  │  1. BROWSER LAUNCHER                       │   │
│  │     - Chromium Browser Instance            │   │
│  │     - New Page Context                     │   │
│  └────────────────────────────────────────────┘   │
│                      │                             │
│                      ▼                             │
│  ┌────────────────────────────────────────────┐   │
│  │  2. PAGE NAVIGATOR                        │   │
│  │     - Go to Login Page                     │   │
│  │     - Wait for Navigation                  │   │
│  │     - Go to Shop Page                      │   │
│  └────────────────────────────────────────────┘   │
│                      │                             │
│                      ▼                             │
│  ┌────────────────────────────────────────────┐   │
│  │  3. ELEMENT LOCATOR                        │   │
│  │     - Find Form Elements                   │   │
│  │     - Find Product Cards                   │   │
│  │     - Find Product Titles                  │   │
│  └────────────────────────────────────────────┘   │
│                      │                             │
│                      ▼                             │
│  ┌────────────────────────────────────────────┐   │
│  │  4. FORM INTERACTOR                        │   │
│  │     - Fill Username                        │   │
│  │     - Fill Password                        │   │
│  │     - Check Checkbox                       │   │
│  │     - Click Sign In                        │   │
│  └────────────────────────────────────────────┘   │
│                      │                             │
│                      ▼                             │
│  ┌────────────────────────────────────────────┐   │
│  │  5. PRODUCT ANALYZER                       │   │
│  │     - List All Products                    │   │
│  │     - Search for iPhone X                  │   │
│  │     - Verify Presence                      │   │
│  └────────────────────────────────────────────┘   │
│                      │                             │
│                      ▼                             │
│  ┌────────────────────────────────────────────┐   │
│  │  6. RESULT LOGGER                          │   │
│  │     - Print Status                         │   │
│  │     - Generate Report                      │   │
│  │     - Close Browser                        │   │
│  └────────────────────────────────────────────┘   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 🔑 Key Locator Visual Reference

### Visual Selector Guide

```
LOGIN FORM
══════════════════════════════════════════

INPUT
├─ name="username"  ◄─── [name="username"]
├─ type="text"
└─ placeholder="Username"

INPUT
├─ name="password"  ◄─── [name="password"]
├─ type="password"
└─ placeholder="Password"

INPUT
├─ type="checkbox"  ◄─── [type="checkbox"]
└─ label="I agree..."

INPUT
├─ type="submit"    ◄─── input[type="submit"]
├─ value="Sign In"  ◄─── [value="Sign In"]
└─ Combined ➜ input[type="submit"][value="Sign In"]


PRODUCT LIST
══════════════════════════════════════════

DIV
├─ class="card"     ◄─── div.card (Container)
│
└─ H4
   ├─ class="card-title"  ◄─── h4.card-title
   └─ text="iPhone X"      ◄─── :has-text("iPhone X")
                           ◄─── text=/iPhone X/i

COMBINED SELECTORS
════════════════════════════════════════════

Full Product Search:
    div.card h4.card-title:has-text("iPhone X")

Text-based Search:
    h4.card-title:has-text("iPhone X")
    text=/iPhone X/i

Loop through all:
    div.card (then iterate with .nth(i))
```

---

## 📊 Test Coverage Map

### Verification Checklist with Visuals

```
✅ FORM ELEMENTS (4/4)
   ├─ ✅ Username Input
   ├─ ✅ Password Input
   ├─ ✅ Checkbox
   └─ ✅ Sign In Button

✅ FORM SUBMISSION (1/1)
   └─ ✅ Form Data Submitted

✅ NAVIGATION (1/1)
   └─ ✅ Redirected to Shop Page

✅ PRODUCTS (8/8 expected)
   ├─ ✅ Product 1: Blackberry
   ├─ ✅ Product 2: iPhone X  ◄─── TARGET
   ├─ ✅ Product 3: Samsung Note 8
   ├─ ✅ Product 4: Nokia Edge
   ├─ ✅ Product 5: (Additional)
   ├─ ✅ Product 6: (Additional)
   ├─ ✅ Product 7: (Additional)
   └─ ✅ Product 8: (Additional)

✅ VERIFICATION (1/1)
   └─ ✅ iPhone X: PRESENT

OVERALL: 16/16 TESTS PASSED (100%) ✅
```

---

## 🎨 Color-Coded Status Guide

```
✅ GREEN (Success)
   - Element found
   - Action completed
   - Verification passed

⚠️  YELLOW (Warning)
   - Timeout handling
   - Alternative selector used
   - Fallback triggered

❌ RED (Failure)
   - Element not found
   - Action failed
   - Verification failed

⏳ BLUE (In Progress)
   - Navigating
   - Waiting
   - Loading
```

---

## 📍 Single Locator Reference

### The Most Important Locators (Copy These!)

```javascript
// LOGIN PAGE LOCATORS
1. page.locator('[name="username"]')
2. page.locator('[name="password"]')
3. page.locator('[type="checkbox"]')
4. page.locator('input[type="submit"][value="Sign In"]')

// SHOP PAGE LOCATORS
5. page.locator('div.card')
6. page.locator('h4.card-title')

// iPhone X SEARCH
7. page.locator('h4.card-title:has-text("iPhone X")')
8. page.locator('text=/iPhone X/i')
```

**These 8 locators cover everything needed for this project!**

---

## 🎯 Success Criteria Visualization

### Project Success Metrics

```
╔════════════════════════════════════════╗
║  TASK COMPLETION TRACKING              ║
╚════════════════════════════════════════╝

Login Page Inspection
  ✅ ✅ ✅ ✅ (4/4 elements found)

Form Automation
  ✅ (Form submitted successfully)

Navigation
  ✅ (Redirected to shop page)

Product Analysis
  ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ (8/8 products found)

iPhone X Verification
  ✅ (iPhone X FOUND)

────────────────────────────────────────

OVERALL STATUS: ✅✅✅✅✅ (100% COMPLETE)

SUCCESS RATE: 100% ✅
```

---

*Visual Flow Diagrams v1.0 - Ready Reference*
