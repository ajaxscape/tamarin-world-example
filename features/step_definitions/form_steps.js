'use strict'

module.exports = function () {
  this.Given(/^I visit (https?:\/\/.*\..*)$/, function (url) {
    return this.visit(url)
  })

  this.Then(/^I expect the title to be "([^"]*)"$/, function (title) {
    return this.getTitle().should.eventually.equal(title)
  })
}
