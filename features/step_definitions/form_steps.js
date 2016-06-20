'use strict'

require('chai')
  .use(require('chai-as-promised'))
  .should()

module.exports = function () {
  this.Given(/^I visit (https?:\/\/.*\..*)$/, function (url) {
    return this.visit(url)
      .then(() => this.setData('cheese', 'cheddar'))
      .then(() => this.getData('cheese').should.equal('cheddar'))
  })

  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    return this.sendKeys('[title="Search"]', searchTerm + '\n')
  })

  this.When(/^I click the "([^"]*)" menu link$/, function (linkText) {
    return this.executeScript(($linkText) => {
      let link = document.querySelector('a').filter((el) => el.text === $linkText).pop()
      if (link) {
        link.click()
      }
    }, linkText)
  })
}
