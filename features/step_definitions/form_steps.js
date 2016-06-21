'use strict'

require('chai')
  .use(require('chai-as-promised'))
  .should()

module.exports = function () {
  this.Given(/^I visit (https?:\/\/.*\..*)$/, function (url) {
    return this.visit(url)
  })

  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    return this.setData('searchTerm', searchTerm)
      .then(() => this.sendKeys('[title="Search"]', searchTerm + '\n', 5))
  })

  this.When(/^I click the "([^"]*)" menu link$/, function (linkText) {
    return this.whenReady('#top_nav', 5)
      .then((nav) => this.executeScript(($nav, $linkText) => {
        let results = Array.prototype.slice.call($nav.querySelectorAll('a'))
        let link = results.filter((el) => el.text === $linkText).pop()
        if (link) {
          link.click()
        } else {
          throw new Error('Cannot find link: ' + $linkText)
        }
      }, nav, linkText))
  })

  this.Then(/^I expect to see some "([^"]*)" results$/, function (type) {
    return this.getData('searchTerm')
      .then((searchTerm) => this.whenReady(`img[alt="${type} result for ${searchTerm}"]`, 5))
      // .then((searchTerm) => this.select('#main', `img[alt="${type} result for ${searchTerm}"]`).should.eventually.not.have.length(0))
  })
}
