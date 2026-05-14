import {Locator, Page} from "@playwright/test";

export class PaymentPage{
    page:Page;
    cardNumber : Locator;
    expMonth : Locator;
    expDate : Locator;
    cvv : Locator;
    cardHolderName : Locator;
    coupon :Locator;
    pageverifyEmail : Locator;
    selectCountry : Locator;
    dropdown : Locator;
    submit : Locator;
    submitDetails : Locator;
    order_id : Locator;

    constructor(page : Page){
        this.page = page;
        this.cardNumber = page.locator("//*[text()='Credit Card Number ']/following-sibling::input");
        this.expMonth =  page.locator("//*[text()='Expiry Date ']/../select").first();
        this.expDate = page.locator("//*[text()='Expiry Date ']/../select").last();
        this.cvv = page.locator("//div[text()='CVV Code ']/following-sibling::input");
        this.cardHolderName = page.locator("//div[text()='Name on Card ']/following-sibling::input");
        this.coupon= page.locator("//div[text()='Apply Coupon ']/following-sibling::input");
        this.pageverifyEmail= page.locator("label[type='text']");
        this.selectCountry = page.getByPlaceholder("Select Country");
        this.dropdown =  page.locator("section.ng-star-inserted");
        this.submit = page.locator("a.action__submit");
        this.submitDetails = page.locator(".hero-primary");
        this.order_id = page.locator("label.ng-star-inserted");
    
    }
    async paymentCheckout(expect : any, email:string){
        await this.cardNumber.waitFor();
        await this.cardNumber.fill("4542 9931 9292 2233");
        await this.expMonth.selectOption("03");
        await this.expDate.selectOption("28");
        await this.cvv.fill("303");
        await this.cardHolderName.fill("Sumit Raj");
        await this.coupon.fill("rahulsheetyacadmy");
        //await this.page.waitForLoadState('networkidle');
        const webemail = await this.pageverifyEmail.textContent();
        expect(webemail).toBe(email);
        await this.selectCountry.pressSequentially("ind");

        await this.dropdown.waitFor();
        const itemCount = await this.dropdown.locator("button").count();
        for(let i=0;i<itemCount;i++){
            const text = await this.dropdown.locator("button").nth(i).textContent()
            if (text === " India"){
                await this.dropdown.locator("button").nth(i).click();
                break;
    
            }
    
        }
        await this.submit.click();
        const orderId = await this.order_id.textContent();
        console.log(orderId);
       // await this.page.waitForLoadState('networkidle');
        return orderId;
    }
    
}

module.exports = {PaymentPage}