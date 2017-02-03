Feature: Loads

  Background:
    Given I visit the demo

  Scenario: I visit the demo and the page loads
    When The page loads
    Then I should see an element with the selector #file-manager
    Then I should not see an element with the selector #file-manager .content