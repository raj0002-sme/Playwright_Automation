//const { expect } = require("@playwright/test");
import { Locator, Page} from "@playwright/test";


export class CartPage{
    page:Page;
    pageContentLoaded : Locator;
    buyNow :Locator;

    
    constructor(page:Page){

        this.page = page;
        this.pageContentLoaded = page.locator("div li").first();
       // this.cartItem = page.locator("h2:has-text("")")
       this.buyNow = page.locator("div.removeWrap button.btn-primary");
    }

    async checkItemInCart(expect: any,iteamName:string){
        await this.pageContentLoaded.waitFor();
        const bool = await this.getParoductLocator(iteamName).isVisible();
        expect(bool).toBeTruthy();

    }

    getParoductLocator(iteamName: string){
        return this.page.locator("h3:has-text('"+iteamName+"')");
    }

    async checkOut(){
            
        await this.buyNow.click();
       // await this.page.waitForLoadState('networkidle');

    }

}
module.exports ={CartPage}