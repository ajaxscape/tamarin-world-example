Feature: Explore Actitime
  Using a web browser
  I want to perform a Google search

  Scenario: Actitime
    Given I visit https://www.actitime.com/
    When I hover over the "Features" menu link
    And I click the "Features in detail" menu link
    Then I expect to see the heading "Features in detail"