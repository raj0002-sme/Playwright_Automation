const {test, expect} = require('@playwright/test')

test('Handle select fropdown and rediobutton', async({page}) =>
    {

        page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const dropdown = page.locator("select.form-control");
        await dropdown.selectOption("consult"); // select conseltant from dopdown option
        await page.locator("span.checkmark").last().click(); // select redio button
        // to check if a checkbox is checked or not 
        console.log(await page.locator("span.checkmark").last().isChecked());

        // Select ok on web popup its not javascript popup and it has the id or class locator if you check
        await page.locator("#okayBtn").click();
        await expect(page.locator("span.checkmark").last()).toBeChecked();

       // await page.pause(); // to paush the page so it dosnt get closed

})
test('handling child window', async({browser})=>{

    const context= await browser.newContext();
    const page = await context.newPage();
    page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    
    //when you try to open a new page that time you need to use the below method
    //you need to perfrom few action at the same time and for that we use Promise.all() method
    // it will allow to run and complete all the process inside it before moving for next operation
    //it returns the result as an array.
    // here 1st step will run and wait till the 2nd step gets executed and new page gets opened
    
    const [newPage] = await Promise.all([
    context.waitForEvent('page'), // listens for any new page open
    page.locator("a[href*='documents-request']").click(),]);// will open a new page
    await newPage.waitForLoadState();

    console.log(await newPage.locator("p.im-para.red").first().textContent());
    const text= await newPage.locator("p.im-para.red").first().textContent();
    const domian_name = text.split("@")[1].split(" ")[0];

    await page.locator("#username").fill(domian_name);
    //console.log(domian_name);

    // Suppose you are entering somthong into a text box and want to grab the text after entering it 
    // so that time textContent method will not work, text content only grabs the txt which is attached to dom
    // you need to use inputValue method to grab the text

      console.log(await page.locator("#username").inputValue());
    //await page.pause();


   





})