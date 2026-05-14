const {Before, After, BeforeStep, AfterStep, Status} = require('@cucumber/cucumber');
const playwright = require('playwright');



//This will run before the scenario
Before(async function () {
     this.browser = await playwright.chromium.launch({headless:false});
     //this.browser = await chromium.launch({ headless: false });
      
      const context = await this.browser.newContext();
      this.page= await context.newPage();
});

BeforeStep(function(){
    console.log('I will run after the scenario')
})


AfterStep(async function({result}){
    if(result.status ===Status.FAILED){
        await this.page.screenshot({path: 'screenshot/screenshot1.png'});
    }

    //you can write what ever you want to do after each step for example if it fails just take the screenshot

})

After(function(){

    console.log('I will run after the scenario')
})