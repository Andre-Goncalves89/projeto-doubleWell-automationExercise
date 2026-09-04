Feature: Contact Us Form with Attachment
  As a platform user
  I want to send a contact message by filling in all fields and attaching a file
  So that my support request is successfully submitted to the responsible team

  Background:
    Given the browser is open at the base URL "https://automationexercise.com"
    And the home page is loaded completely

  Scenario: Submit contact form filling out data and attachment successfully
    Given I click the "Contact us" button in the top menu
    And I validate that the header "GET IN TOUCH" is visible
    When I fill in the name field with "QA User", email with "testqa@qa.com", subject with "Technical Support - Automated Test", and message with "Automated test message sent via contact form."
    And I upload a valid file in the attachment field using "./src/fixtures/sample.txt"
    And I click the "Submit" button
    And I confirm the browser alert by clicking OK
    Then I validate that the success message "Success! Your details have been submitted successfully." is visible
    When I click the "Home" button
    Then I validate that the user has been successfully redirected to the home page