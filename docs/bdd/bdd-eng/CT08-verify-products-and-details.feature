Feature: Product Verification and Details
  As a user browsing the e-commerce
  I want to explore the product catalog and view the details of a specific item
  So that I can check essential information such as price, category, and availability

  Background:
    Given the browser is open at the base URL "https://automationexercise.com"
    And the home page is loaded completely

  Scenario: Navigate through the product catalog and validate information on the details page
    Given I click the "Products" button in the top menu
    Then I validate that the user has been redirected to the page with the header "ALL PRODUCTS"
    And I validate that the product list is visible on the screen
    When I click "View Product" on the first product in the list
    Then I validate that the user has been redirected to the product details page "/product_details/1"
    And I validate that the following product information is visible on the screen:
      | Product Information           |
      | Product Name                  |
      | Category                      |
      | Price                         |
      | Availability / Stock          |
      | Condition                     |
      | Brand                         |