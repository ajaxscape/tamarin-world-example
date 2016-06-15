Feature: Do a Google Search
  Using a web browser
  I want to perform a Google search

  Scenario: Google Search
    Given I visit http://google.com
    When I enter "Hello" into the search bar
    And I click the search button
    Then I expect to see some results