Feature: Do a Google Search
  Using a web browser
  I want to perform a Google search

  Scenario: Google Search for tamarin images
    Given I visit http://google.com
    Then I expect the title to be "Google"
    When I search for "Tamarin"
    When I click the "Images" menu link
    Then I expect to see some "Image" results