'use strict'

module.exports = function () {
  this.Given(/^I visit (https?:\/\/.*\..*)$/, function visitStep (url) {
    return this.visit(url)
  })

  this.Then(/^I expect the title to be "([^"]*)"$/, function waitForTitleStep (title) {
    return this.waitForTitle(title)
  })

  this.Then(/^I expect the "([^"]*)" cookie to exist$/, function waitForTitleStep (name) {
    return this.waitForCookie(name)
  })

  this.Then(/^I expect the "([^"]*)" cookie to be "([^"]*)"$/, function waitForTitleStep (name, expectedValue) {
    return this.waitForCookie(name).should.eventually.have.property('value', expectedValue)
  })
}
