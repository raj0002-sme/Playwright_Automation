const {Given, When, Then } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");
const {POManager} = require("../../pageObjectPattern/POManager");
      
Given('Login to the practice page with {string} and {string}', {timeout : 60000},async function (username, password) {
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    this.poManager = new POManager(this.page);
    const loginPage = this.poManager.getLoginPage();
    this.user = username;
    await loginPage.validLogin(username, password);

    });

Then('User should not be able to get into the app', {timeout: 60000}, async function () {
    const erroemsg = await this.page.getByText(" Incorrect email or password. ");
    expect(erroemsg).toHaveText(" Incorrect email or password. ")


         
    });