import { Locator, Page } from '@playwright/test';
import {DashboardPage} from '../pageObjectPattern_ts/DashboardPage';
import {LoginPage} from '../pageObjectPattern_ts/LoginPage';
import {CartPage} from '../pageObjectPattern_ts/CartPage';
import {PaymentPage} from '../pageObjectPattern_ts/PaymentPage';
import {OrderPage} from '../pageObjectPattern_ts/OrderPage';


export class POManager {
    page : Page;
    loginPage : LoginPage;
    dashbordPage : DashboardPage;
    cartPage : CartPage;
    paymentPage : PaymentPage;
    orderPage : OrderPage;

    constructor(page: Page){
        this.page = page
        this.loginPage = new LoginPage(this.page);
        this.dashbordPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(this.page);
        this.paymentPage = new PaymentPage(this.page);
        this.orderPage = new OrderPage(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

      getDashboardPage(){
        return this.dashbordPage;
    }
      getCartPage(){
        return this.cartPage;
    }

    getPaymentPage(){
        return this.paymentPage;

    }

    
    getOrderPage(){
        return this.orderPage;

    }
}
module.exports = {POManager}