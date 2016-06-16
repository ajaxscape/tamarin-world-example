'use strict'

const webDriver = require('selenium-webdriver')
const By = webDriver.By

require('chai')
  .use(require('chai-as-promised'))
  .should()

module.exports = function () {
  this.Given(/^I visit (https?:\/\/.*\..*)$/, function (url) {
    return this.getDriver()
      .then((driver) => driver.get(url))
      .then(() => this.setData('cheese', 'cheddar'))
      .then(() => this.getData('cheese').should.equal('cheddar'))
  })

  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    return this.sendKeys('[title="Search"]', searchTerm + '\n')
  })
}
