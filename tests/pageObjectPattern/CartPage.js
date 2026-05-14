const { expect } = require("@playwright/test");

class CartPage{
    
    constructor(page){

        this.page = page;
        this.pageContentLoaded = page.locator("div li").first();
       // this.cartItem = page.locator("h2:has-text("")")
       this.buyNow = page.locator("div.removeWrap button.btn-primary");
    }

    async checkItemInCart(iteamName){
        await this.pageContentLoaded.waitFor();
        const bool = await this.getParoductLocator(iteamName).isVisible();
        expect(bool).toBeTruthy();

    }

    getParoductLocator(iteamName){
        return this.page.locator("h3:has-text('"+iteamName+"')");
    }

    async checkOut(){
            
        await this.buyNow.click();
       // await this.page.waitForLoadState('networkidle');

    }

}
module.exports ={CartPage}