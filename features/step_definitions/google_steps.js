'use strict'

const webDriver = require('selenium-webdriver')
const By = webDriver.By

const page = {
  'search': By.css('[title="Search"]'),
  'navLink': (linkText) => By.xpath(`//*[@role="navigation"]//a[text()="${linkText}"]`),
  'results': (type, searchTerm) => By.css(`img[alt="${type} result for ${searchTerm}"]`)
}

const retries = 5

module.exports = function () {
  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    return this.setData('searchTerm', searchTerm)
      .then(() => this.sendKeys(page.search, searchTerm + '\n', retries))
  })

  this.When(/^I click the "([^"]*)" menu link$/, function (linkText) {
    return this.click(page.navLink(linkText), retries)
  })

  this.Then(/^I expect to see some "([^"]*)" results$/, function (type) {
    return this.getData('searchTerm')
      .then((searchTerm) => this.waitFor(page.results(type, searchTerm), retries))
  })
}
