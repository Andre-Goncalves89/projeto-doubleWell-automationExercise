Feature: Registration with Existing Email (Negative Sign-up)
  As a user trying to register on the platform
  I want to attempt creating a new account using an email that is already registered
  So that the system prevents duplication and displays an appropriate error message

  Background:
    Given the browser is open at the base URL "https://automationexercise.com"
    And the home page is loaded completely
    And an account is previously registered and active in the database

  Scenario: Attempt to register using an email that already exists in the database
    Given I click the "Signup / Login" button
    And I validate that the header "New User Signup!" is visible
    When I fill in the name field with "Test User" and email with "testdw@qa.com"
    And I click the "Signup" button
    Then I validate that the error message "Email Address already exist!" is visible on the screen