'use strict'

const webDriver = require('selenium-webdriver')
const By = webDriver.By

require('chai')
  .use(require('chai-as-promised'))
  .should()

const find = {
  'search': By.css('[title="Search"]'),
  'navLink': (linkText) => By.xpath(`//*[@role="navigation"]//a[text()="${linkText}"]`),
  'results': (type, searchTerm) => By.css(`img[alt="${type} result for ${searchTerm}"]`)
}

const retries = 5

module.exports = function () {
  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    return this.setData('searchTerm', searchTerm)
      .then(() => this.sendKeys(find.search, searchTerm + '\n', retries))
  })

  this.When(/^I click the "([^"]*)" menu link$/, function (linkText) {
    return this.click(find.navLink(linkText), retries)
  })

  this.Then(/^I expect to see some "([^"]*)" results$/, function (type) {
    return this.getData('searchTerm')
      .then((searchTerm) => this.whenReady(find.results(type, searchTerm), retries))
  })
}
