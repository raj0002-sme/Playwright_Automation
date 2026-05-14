import {Locator, Page} from '@playwright/test';

export class DashboardPage{
    page:Page;
    items: Locator;
    cart : Locator;


    constructor(page : Page){
        this.page = page;
        this.items = page.locator("div.card-body");
        this.cart = page.locator("button[routerlink='/dashboard/cart']");
        
    }

    async getProduct(itemname: string){
        await this.items.first().waitFor();
        
        for(let i=0; i<await this.items.count(); i++){
        const iteam = await this.items.nth(i).locator("b").textContent();
        console.log(iteam)
        if(itemname === iteam){

           await  this.items.nth(i).locator("button").last().click();
           break;
        }
    
    }

    }
    async nevigteToCart(){
        await this.cart.click();
    }

}
module.exports = {DashboardPage};