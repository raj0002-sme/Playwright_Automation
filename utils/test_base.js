const base = require('@playwright/test');

// Crete your own fixture for test data and run your test with fixture
// you cant run the same test with multiple data using fixture thats the limitation 

exports.customeTest = base.test.extend(
    {
        testdataForOrder:
        {
    user : "rohit100@gmail.com",
    pass : "Rohit@123",
    product : "ZARA COAT 3"
}
    }
)