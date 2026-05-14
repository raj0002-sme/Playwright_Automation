import { Locator, Page } from "@playwright/test";

export class LoginPage{
    page:Page;
    userId : Locator;
    password :Locator;
    login : Locator;

    constructor(page : Page){
        this.page = page;
        this.userId = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.login = page.locator("input[value='Login']")

    }

async validLogin(userName:string, password:string){
    await this.userId.fill(userName);
    await this.password.fill(password);
    await this.login.click();
    //await this.page.waitForLoadState('networkidle');
}
}
module.exports = {LoginPage};