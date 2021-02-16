Feature: To validate the login functionality

@regression
  Scenario: To verify the login functionality with valid username and invalid password
  									
    Given user has to launch the chrome browser and hit the url
    When user has to enter the "<username>" and "<password>"
    And click the login button
    Then user unable to enter the homepage
    
    Examples: 
      | username | password     |
      | java     | java@123     |
      | phython  | phython@123  |
      | selenium | selenium@123 |
    

    