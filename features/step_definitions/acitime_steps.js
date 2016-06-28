'use strict'

const webDriver = require('selenium-webdriver')
const By = webDriver.By

require('chai')
  .use(require('chai-as-promised'))
  .should()

const find = {
  'Features': By.xpath('//*[@id="nav-features"]/a'),
  'subMenu': (linkText) => By.xpath(`//*[@id="nav-features"]//a[text()="${linkText}"]`),
  'heading': By.css('h1')
}

const retries = 5
const hoverDelay = 500

module.exports = function () {
  this.When(/^I hover over the "([^"]*)" menu link$/, function (link) {
    return this.hover(find[link], hoverDelay, retries)
  })

  this.When(/^I click the "([^"]*)" submenu link$/, function (linkText) {
    return this.click(find.subMenu(linkText), retries)
  })

  this.Then(/^I expect the heading to be "([^"]*)"$/, function (text) {
    return this.getText(find.heading, retries).should.eventually.equal(text)
  })
}
