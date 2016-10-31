'use strict'

const page = {
  'search': { css: '[title="Search"]' },
  'navLink': (linkText) => ({ xpath: `//*[@role="navigation"]//a[text()="${linkText}"]` }),
  'results': (type, searchTerm) => ({ css: `img[alt="${type} result for ${searchTerm}"]` })
}

module.exports = function () {
  this.When(/^I search for "([^"]*)"$/, function enterSearchTermStep (searchTerm) {
    return this.setData('searchTerm', searchTerm)
      .then(() => this.sendKeys(page.search, searchTerm + '\n'))
  })

  this.When(/^I click the "([^"]*)" menu link$/, function clickMenuLinkStep (linkText) {
    return this.click(page.navLink(linkText))
  })

  this.Then(/^I expect to see some "([^"]*)" results$/, function waitForResultsStep (type) {
    return this.getData('searchTerm')
      .then((searchTerm) => this.waitFor(page.results(type, searchTerm)))
  })
}
