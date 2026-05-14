Feature: Test Paractice page

    @regression
    @smoke
    Scenario Outline: Test with invalid login
        Given Login to the practice page with "<username>" and "<password>"
        Then User should not be able to get into the app

        Examples:
            | username              | password      |       
            | monulraj10@gmail.com  | HappyDays@100 |
            | monulraj20@gmail.com  |HappyDays@200  |