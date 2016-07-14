'use strict'

module.exports = function () {
  this.Given(/^I visit (https?:\/\/.*\..*)$/, function visitStep (url) {
    return this.visit(url)
  })

  this.Then(/^I expect the title to be "([^"]*)"$/, function waitForTitleStep (title) {
    return this.waitForTitle(title)
  })
}
