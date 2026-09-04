Feature: User Login (Incorrect Login)
  As a user trying to access the system
  I want to attempt logging in using invalid credentials
  So that the system prevents unauthorized access and displays an appropriate error message

  Background:
    Given the browser is open at the base URL "https://automationexercise.com"
    And the home page is loaded completely

  Scenario: Attempt to log in with incorrect email or password
    Given I click the "Signup / Login" button
    And I validate that the header "Login to your account" is visible
    When I fill in the email field with "erro@test.com" and password with "erro123"
    And I click the "Login" button
    Then I validate that the error message "Your email or password is incorrect!" is visible on the screen