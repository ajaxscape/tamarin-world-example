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
    return this.whenReady('#top_nav', 5)
      .then((nav) => this.executeScript(($nav, $linkText) => {
        let results = Array.prototype.slice.call($nav.querySelectorAll('a'))
        console.log(results)
        let link = results.filter((el) => el.text === $linkText).pop()
        if (link) {
          link.click()
        } else {
          throw new Error('Cannot find link: ' + $linkText)
        }
      }, nav, linkText))
  })
}
