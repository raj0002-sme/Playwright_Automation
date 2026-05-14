const {test, expect} = require("@playwright/test");
//const { APiUtils } = require('../utils/APiUtils');

let webContext;
const email= "monulraj108@gmail.com";
const fakeordermsg= {data:[],message:"No Orders"};

// Here we will learn how to do netwrk intercetion in our code-- check test method for it

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


test('network interception working', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    // 🔐 LOGIN (MANDATORY)
    await page.locator('#userEmail').fill('monulraj108@gmail.com');
    await page.locator('#userPassword').fill('HappyDays@500');
    await page.locator("[value='Login']").click();

    // Wait for dashboard
    await page.waitForURL('**/dashboard/**');

    // ✅ Route BEFORE clicking My Orders
    await page.route(
        '**/api/ecom/order/get-orders-for-customer/*',
        async (route) => {

            console.log('✅ API intercepted');

            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({
                    data: fakeordermsg,
                    message: "Orders fetched successfully"
                })
            });
        }
    );

    // Trigger API
    await page.locator("button[routerlink='/dashboard/myorders']").click();

    await page.pause();
});

//check if an order id which belogs to other user can be accessed from your account
test('intercept request call', async({})=>{

    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("button[routerlink='/dashboard/myorders']").click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route =>route.continue({url : "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=69499e7f32ed865871468jkjk"}));
        await page.locator("button:has-text('View')").first().click();
        await page.pause();

})

// abort a network call
// suppose a page have image and it takes too much time to load and you think without that image
// your test can run then just abort the image load and run the tests
// It will run the application normally just not load the image
// you can do this for other nwtwork call as well depending upon the situation

test.only('Abort the network call', async({})=>{

    const page= await webContext.newPage();
    await page.route('**/*.{jpg,png,jpeg}', route => route.abort());
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.pause();

})