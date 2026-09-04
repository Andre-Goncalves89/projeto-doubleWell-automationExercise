Feature: User Logout
  As a user logged into the platform
  I want to terminate my session (logout)
  So that my account remains secure after using the system

  Background:
    Given the browser is open at the base URL "https://automationexercise.com"
    And the home page is loaded completely
    And an account is previously registered and active in the database

  Scenario: Log out user successfully
    Given I click the "Signup / Login" button
    And I validate that the header "Login to your account" is visible
    When I fill in the email field with "testqadw@qa.com" and password with "test123"
    And I click the "Login" button
    And I validate that the text "Logged in as " is visible in the top menu
    When I click the "Logout" button
    Then I validate that the user has been successfully redirected to the login/signup page