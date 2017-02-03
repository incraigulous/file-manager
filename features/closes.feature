Feature: Closes

  Background:
    Given I visit the demo

  Scenario: I click a custom close button outside the component
    When The page loads
    Then I should see an element with the selector #file-manager
    And I click on an element with the selector #close-btn
    Then I should not see an element with the selector #file-manager .content

  Scenario: I click the modal close button
    When The page loads
    Then I should see an element with the selector #file-manager
    And I click on an element with the selector #open-btn
    Then I should see an element with the selector #file-manager .content
    And I click on an element with the selector #file-manager .close
    Then I should not see an element with the selector #file-manager .content