import {test, expect} from '@playwright/test';
import { POManager } from '../pageObjectPattern_ts/POManager';
//const dataset = JSON.parse(JSON.stringify(require("../utils/ETE-PO-Testdata.json")));
import dataset from '../utils/ETE-PO-Testdata.json';

type TestData = {
  product: string;
  user: string;
  pass: string;
};

for(const data of  dataset as TestData[] ){
test(`End to end ecommerce automation for ${data.product}`,{ tag: ['@smoke', '@sanity']}, async({browser})=>{
    const context = await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

    const user =  page.locator("#userEmail");
    const itemBody= page.locator("div.card-body");
    //const itemname= "ADIDAS ORIGINAL";
    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.validLogin(data.user, data.pass);
    const dashbordPage = poManager.getDashboardPage();
    // select the product form dashboard page
    await dashbordPage.getProduct(data.product);
    await dashbordPage.nevigteToCart();

    // check if item is parest on the card page and do the checkout

    const cartPage = poManager.getCartPage();
    await cartPage.checkItemInCart(expect,data.product);
    await cartPage.checkOut();
   
    const paymentPage = poManager.getPaymentPage();
    const order_id = await paymentPage.paymentCheckout(expect, data.user);

    const orderPage =poManager.getOrderPage();
    await orderPage.checkOrders(expect, order_id);

    //await page.pause();
})
}