Feature: To validate the login funtionality

  Scenario: To verify the login functionality with valid username and invalid password
  									
    Given To verify the login funnctionality and git the url
    When user has to enter the username and password
      | raja | raja@123 | dheena | dheena@123 |
    And click the login button
    Then user unable to enter the homepage
