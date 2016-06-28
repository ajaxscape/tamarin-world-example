'use strict'

const webDriver = require('selenium-webdriver')
const By = webDriver.By

require('chai')
  .use(require('chai-as-promised'))
  .should()

const find = {
  'Features': By.xpath('//*[@id="nav-features"]/a'),
  'search': By.css('[title="Search"]'),
  'subMenu': (linkText) => By.xpath(`//*[@id="nav-features"]//a[text()="${linkText}"]`),
  'navLink': (linkText) => By.xpath(`//*[@role="navigation"]//a[text()="${linkText}"]`),
  'results': (type, searchTerm) => By.css(`img[alt="${type} result for ${searchTerm}"]`)
}

const retries = 5
const hoverDelay = 500

module.exports = function () {
  this.Given(/^I visit (https?:\/\/.*\..*)$/, function (url) {
    return this.visit(url)
  })

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

  this.When(/^I hover over the "([^"]*)" menu link$/, function (link) {
    return this.hover(find[link], hoverDelay, retries)
  })

  this.When(/^I click the "([^"]*)" submenu link$/, function (linkText) {
    return this.click(find.subMenu(linkText), retries)
  })
}
