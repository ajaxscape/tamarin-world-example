'use strict'

const webDriver = require('selenium-webdriver')
const By = webDriver.By

require('chai')
  .use(require('chai-as-promised'))
  .should()

const map = {
  'Features': By.xpath('//*[@id="nav-features"]/a'),
  'subMenu': (linkText) => By.xpath(`//*[@id="nav-features"]//a[text()="${linkText}"]`)
}

module.exports = function () {
  this.Given(/^I visit (https?:\/\/.*\..*)$/, function (url) {
    return this.visit(url)
  })

  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    return this.setData('searchTerm', searchTerm)
      .then(() => this.sendKeys(By.css('[title="Search"]'), searchTerm + '\n', 5))
  })

  this.When(/^I click the "([^"]*)" menu link$/, function (linkText) {
    return this.click(By.xpath(`//*[@role="navigation"]//a[text()="${linkText}"]`), 5)
  })

  this.Then(/^I expect to see some "([^"]*)" results$/, function (type) {
    return this.getData('searchTerm')
      .then((searchTerm) => this.whenReady(By.css(`img[alt="${type} result for ${searchTerm}"]`), 5))
  })

  this.When(/^I hover over the "([^"]*)" menu link$/, function (link) {
    return this.hover(map[link], 500, 5)
  })
  
  this.When(/^I click the "([^"]*)" submenu link$/, function (linkText) {
    return this.click(map.subMenu(linkText), 5)
  })
}
