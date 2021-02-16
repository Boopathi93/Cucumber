Feature: To validate the login functionality

@sanity
  Scenario: To verify the login functionality with valid username and invalid password
    Given user has to launch chrome and hit the url
    When user has to enter the username and password
    And click the button
    And user has unable to enter the homepage
    
    @smoke
    Scenario: To verify the forget password function
    When user has click the forgetten password
    And user has to enter the mobile number
    Then user should move to identify this account another way page
  
