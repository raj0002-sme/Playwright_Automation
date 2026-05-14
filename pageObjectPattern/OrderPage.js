class OrderPage{
    constructor(page){
        this.page = page;
        this.orderTab = page.locator("button[routerlink='/dashboard/myorders']");
        this.orderlist = page.locator("tbody tr");
        this.orderidFromOrderPage = page.locator("div.-main");
    }

    async checkOrders(expect,order_id){
        await this.orderTab.waitFor();

            await this.orderTab.click();
            //await this.page.waitForLoadState('networkidle');
    
            await this.orderlist.last().waitFor();
            
            //const row = await this.orderlist;
            for(let i=0;i<await this.orderlist.count(); i++){
                const id= await this.orderlist.nth(i).locator("th").textContent();
                console.log(id)
                if (order_id.includes(id)){
        
                    console.log(id)
                    console.log(order_id)
        
                    await this.orderlist.nth(i).locator("td button").first().click();
                    break;
                }
            }
           // await this.page.waitForLoadState('networkidle')
           await this.orderidFromOrderPage.waitFor();
            const final_order_id = await this.orderidFromOrderPage.textContent();
        
           expect(order_id).toContain(final_order_id);
    }
}
module.exports={OrderPage}