'use strict'

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
    return this.sendKeys(id, searchTerm)
  })
}
