Feature: User Registration (Register User)
  As a new user
  I want to register on the Automation Exercise platform
  So that I can access the system with my account and manage my data

  Background:
    Given the browser is open at the base URL "https://automationexercise.com"
    And the home page is loaded completely

  Scenario Outline: Register a new user successfully
    Given I click the "Signup / Login" button
    And I validate that the header "New User Signup!" is visible
    And I enter the name "<name>" and a valid dynamically generated e-mail in the registration fields
    And I click the "Signup" button
    And I validate that the header "ENTER ACCOUNT INFORMATION" is visible
    When I fill in the account information with "<title>", "<password>" and the date of birth
    And I check the newsletter and special offers subscription options
    And I fill in all address and contact details with valid data
    And I click the "Create Account" button
    Then I validate that the message "ACCOUNT CREATED!" is visible on the screen
    And I click the "Continue" button
    And I validate that the text "Logged in as " is visible in the top menu
    When I click the "Delete Account" button
    Then I validate that the message "ACCOUNT DELETED!" is visible and I click the "Continue" button

    Examples:
      | name     | title | password |
      | Test QA  | Mr.   | Pass123  |