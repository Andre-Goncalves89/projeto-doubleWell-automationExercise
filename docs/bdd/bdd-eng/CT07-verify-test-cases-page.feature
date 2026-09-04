Feature: Test Cases Page Verification (Navigation)
  As a user browsing the platform
  I want to access the available test cases section in the top menu
  So that I can check the list and details of the tests supported by the application

  Background:
    Given the browser is open at the base URL "https://automationexercise.com"
    And the home page is loaded completely

  Scenario: Access and validate the test cases page successfully
    Given I click the "Test Cases" button in the top menu
    Then I validate that the user has been successfully redirected to the "/test_cases" page
    And I validate that the header "TEST CASES" is visible on the screen