Feature: To validate the login functionality

  Background: 
    Given user has to launch chrome and hit the url

  Scenario: To verify the login functionality with valid username and invalid password
    When user has to enter the username and password
      | raja   | raja@123   |
      | dheena | dheena@123 |
    And click the login button
    Then user able to enter the homepage

  Scenario: To verify the forget password function
    When user has click the forgetten password
    And user has to enter the mobile number
    Then user should move to identify this account another way page
