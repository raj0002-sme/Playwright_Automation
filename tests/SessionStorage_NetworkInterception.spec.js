const {test, expect} = require("@playwright/test");

let webContext;
const email= "monulraj108@gmail.com";

// save session storage and inject into new browsers

test.beforeAll("Run bedore all test", async({browser})=>{
    const context= await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    //const email= "monulraj108@gmail.com";
    const user =  page.locator("#userEmail");
    const itemBody= page.locator("div.card-body");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill("HappyDays@500");
    await page.locator("input[value='Login']").waitFor();
    const loginBtn = page.locator("input[value='Login']");
    await loginBtn.click();
    await page.waitForLoadState('networkidle');

    // once you logged in now use the storageState methos to just capture the details into a json
    await context.storageState({path : 'state.json'})
    // then use that json file for opening new browser with that details and it will skip the login
    // you just need to pass the url
    webContext = await browser.newContext({storageState : 'state.json'});
})

test('end to end ecommerce', async()=>{

    const page = await webContext.newPage();

    page.goto("https://rahulshettyacademy.com/client/#/auth/login")
        const itemBody= page.locator("div.card-body");
    const itemname= "ADIDAS ORIGINAL";

     await itemBody.first().waitFor({ state: 'visible' });
    for(let i=0; i<await itemBody.count(); i++){
        const iteam = await itemBody.nth(i).locator("b").textContent();
        console.log(iteam)
        if(itemname === iteam){

           await  itemBody.nth(i).locator("button").last().click();
           break;
        }
    
    }
    await page.locator("button[routerlink='/dashboard/cart']").click();
    await page.locator("div li").first().waitFor();
    const bool= await page.locator("h3:has-text('"+itemname+"')").isVisible(); //to check if same item is preset or nit
    expect(bool).toBeTruthy(); // to check if return type is true or not
   // const order_id= await page.locator(".itemNumber").textContent();
    //console.log(order_id);
    await page.locator("div.removeWrap button.btn-primary").click();

    await page.waitForLoadState('networkidle');
    await page.locator("//*[text()='Credit Card Number ']/following-sibling::input").fill("4542 9931 9292 2233");
    await page.locator("//*[text()='Expiry Date ']/../select").first().selectOption("03");
    await page.locator("//*[text()='Expiry Date ']/../select").last().selectOption("28");
    await page.locator("//div[text()='CVV Code ']/following-sibling::input").fill("303");
    await page.locator("//div[text()='Name on Card ']/following-sibling::input").fill("Sumit Raj");
    await page.locator("//div[text()='Apply Coupon ']/following-sibling::input").fill("rahulshettyacademy");
    await page.waitForLoadState('networkidle');

    const pageverifyEmail=await page.locator("label[type='text']").textContent();
    expect(pageverifyEmail).toBe(email);

    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    const dropdown= await page.locator("section.ng-star-inserted");
    await dropdown.waitFor();
    const itemCount = await dropdown.locator("button").count();
    for(let i=0;i<itemCount;i++){
        const text = await dropdown.locator("button").nth(i).textContent()
        if (text===" India"){
            await dropdown.locator("button").nth(i).click();
            break;

        }

    }
    await page.locator("a.action__submit").click();
    await page.locator(".hero-primary").waitFor();
    const order_id = await page.locator("label.ng-star-inserted").textContent();
    console.log(order_id);

    await page.locator("button[routerlink='/dashboard/myorders']").click();
await page.waitForLoadState('networkidle');
    await page.locator("tbody tr").last().waitFor();
    
    const row = await page.locator("tbody tr");
    for(let i=0;i<await row.count(); i++){
        const id= await row.nth(i).locator("th").textContent();
        console.log(id)
        if (order_id.includes(id)){

            console.log(id)
            console.log(order_id)

            await row.nth(i).locator("td button").first().click();
            break;
        }
    }
    await page.waitForLoadState('networkidle')
    const final_order_id = await page.locator("div.-main").textContent();

   expect(order_id).toContain(final_order_id);


})

test('Check if its session storege is working for 2 methods', async()=>{

    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    
    const itemBody= page.locator("div.card-body");
    const itemname= "ADIDAS ORIGINAL";

     await itemBody.first().waitFor({ state: 'visible' });
    for(let i=0; i<await itemBody.count(); i++){
        const iteam = await itemBody.nth(i).locator("b").textContent();
        console.log(iteam)
        if(itemname === iteam){

          // await  itemBody.nth(i).locator("button").last().click();
           //break;
        }
    
    }




})