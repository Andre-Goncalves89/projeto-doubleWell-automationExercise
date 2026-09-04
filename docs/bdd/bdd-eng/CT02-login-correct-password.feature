Feature: User Login (Correct Login)
  As a registered user
  I want to log in to the platform using valid credentials
  So that I can securely access the restricted resources of my account

  Background:
    Given the browser is open at the base URL "https://automationexercise.com"
    And the home page is loaded completely
    And an account is previously registered in the database

  Scenario: Log in successfully using correct email and password
    Given I click the "Signup / Login" button
    And I validate that the header "Login to your account" is visible
    When I fill in the email field with "testqadw@qa.com" and password with "test123"
    And I click the "Login" button
    Then I validate that the text "Logged in as " is visible in the top menu
    When I click the "Delete Account" button
    Then I validate that the message "ACCOUNT DELETED!" is visible on the screen
    And I click the "Continue" button