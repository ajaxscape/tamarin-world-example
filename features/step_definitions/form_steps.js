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

  this.When(/^I enter "([^"]*)" into the search bar$/, function (searchTerm) {
    return this.getDriver()
      .then((driver) => driver.findElement(By.css('[title="Search"]')).sendKeys(searchTerm + '\n'))
  })
}
