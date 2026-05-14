
const {DashboardPage} = require('./DashboardPage');
const {LoginPage} = require('./LoginPage');
const {CartPage} = require('./CartPage');
const {PaymentPage} = require('./PaymentPage');
const {OrderPage} = require('./OrderPage');

class POManager {

    constructor(page){
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