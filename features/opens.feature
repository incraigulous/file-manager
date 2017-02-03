Feature: Opens

  Background:
    Given I visit the demo

  Scenario: I click a custom open button outside the component
    When The page loads
    Then I should not see an element with the selector #file-manager .content
    And I click on an element with the selector #open-btn
    Then I should see an element with the selector #file-manager .content