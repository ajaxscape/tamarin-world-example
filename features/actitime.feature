Feature: Explore Actitime
  Using a web browser
  I want to perform a Google search

  Scenario: Actitime
    Given I visit https://www.actitime.com/
    Then I expect the "_ym_isad" cookie to be "2"
    And I expect the "_ym_uid" cookie to exist
    When I hover over the "Features" menu link
    And I click the "Features in detail" submenu link
    Then I expect the heading to be "Features in Detail"