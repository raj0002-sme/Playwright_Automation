const {Given, When, Then} = require("@cucumber/cucumber");
const {POManager} = require("../../pageObjectPattern/POManager");
const playwright = require('playwright');
const {expect} = require('@playwright/test')
//const { setDefaultTimeout } = require('@cucumber/cucumber');
//setDefaultTimeout(60 * 1000);
//const { chromium } = require('playwright');

Given('Login to ecommerce application with {string} and {string}',{timeout:60*1000}, async function (username, password) {

    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    this.poManager = new POManager(this.page);
    const loginPage = this.poManager.getLoginPage();
    this.user = username;
    await loginPage.validLogin(username, password);
   // return 'pending';
    });


When('Add {string} to the cart', {timeout:60*1000}, async function (product) {
    this.dashbordPage = this.poManager.getDashboardPage();
    // select the product form dashboard page and add to cart
    await this.dashbordPage.getProduct(product);
    await this.dashbordPage.nevigteToCart();

    });


Then('Verify {string} is added to the cart', {timeout:60*1000},async function (product) {
    this.cartPage = this.poManager.getCartPage();
    await this.cartPage.checkItemInCart(product);
    await this.cartPage.checkOut();
    });



When('Enter the valid payment details and place the order',{timeout:60*1000},async function () {
    this.paymentPage = this.poManager.getPaymentPage();
    this.order_id = await this.paymentPage.paymentCheckout(expect, this.user);
    });


Then('Verify order is present in the order history page',{timeout:60*1000}, async function () {
    this.orderPage =this.poManager.getOrderPage();
    await this.orderPage.checkOrders(expect, this.order_id);
    });