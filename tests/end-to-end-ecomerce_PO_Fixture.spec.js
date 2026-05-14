const {test, expect} = require('@playwright/test');
const {customeTest} = require('../utils/test_base')
const { waitForDebugger } = require('inspector');
const { buffer } = require('stream/consumers');
const { POManager } = require('./pageObjectPattern/POManager');
const dataset = JSON.parse(JSON.stringify(require("../utils/ETE-PO-Testdata.json")));



customeTest(`End to end ecommerce automation`, async({browser, testdataForOrder })=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const user =  page.locator("#userEmail");
    const itemBody= page.locator("div.card-body");
    //const itemname= "ADIDAS ORIGINAL";
    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.validLogin(testdataForOrder.user, testdataForOrder.pass);
    const dashbordPage = poManager.getDashboardPage();
    // select the product form dashboard page
    await dashbordPage.getProduct(testdataForOrder.product);
    await dashbordPage.nevigteToCart();

    // check if item is parest on the card page and do the checkout

    const cartPage = poManager.getCartPage();
    await cartPage.checkItemInCart(testdataForOrder.product);
    await cartPage.checkOut();
   
    const paymentPage = poManager.getPaymentPage();
    const order_id = await paymentPage.paymentCheckout(expect, testdataForOrder.user);

    const orderPage =poManager.getOrderPage();
    await orderPage.checkOrders(expect, order_id);

    //await page.pause();


})