class LoginPage{

    constructor(page){
        this.page = page;
        this.userId = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.login = page.locator("input[value='Login']")

    }

async validLogin(userName, password){
    await this.userId.fill(userName);
    await this.password.fill(password);
    await this.login.click();
    //await this.page.waitForLoadState('networkidle');
}
}
module.exports = {LoginPage};