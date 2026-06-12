class LoginPagePractise {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('[name="username"]');
        this.passwordInput = page.locator('[name="password"]');
        this.checkbox = page.locator('[type="checkbox"]');
        this.signInButton = page.locator('input[type="submit"][value="Sign In"]');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.checkbox.check();
        await this.signInButton.click();
    }

    async navigateToLoginPage(url) {
        await this.page.goto(url);
    }
}

module.exports = { LoginPagePractise };
