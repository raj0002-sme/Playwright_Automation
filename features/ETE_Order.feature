Feature: Ecommerce validations

    @regression
    Scenario: Placing the order
        Given Login to ecommerce application with "monulraj108@gmail.com" and "HappyDays@500"
        When Add "ADIDAS ORIGINAL" to the cart
        Then Verify "ADIDAS ORIGINAL" is added to the cart
        When Enter the valid payment details and place the order
        Then Verify order is present in the order history page


        @regression
    Scenario: Placing the order
        Given Login to ecommerce application with "monulraj108@gmail.com" and "HappyDays@500"
        When Add "ADIDAS ORIGINAL" to the cart
        Then Verify "ADIDAS ORIGINAL" is added to the cart
        When Enter the valid payment details and place the order
        Then Verify order is present in the order history page
        

