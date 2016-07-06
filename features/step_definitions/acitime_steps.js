'use strict'

const page = {
  'Features': {xpath: '//*[@id="nav-features"]/a'},
  'subMenu': (linkText) => ({xpath: `//*[@id="nav-features"]//a[text()="${linkText}"]`}),
  'heading': {css: 'h1'}
}

const retries = 5
const hoverDelay = 500

module.exports = function () {
  this.When(/^I hover over the "([^"]*)" menu link$/, function (link) {
    return this.hover(page[link], hoverDelay, retries)
  })

  this.When(/^I click the "([^"]*)" submenu link$/, function (linkText) {
    return this.click(page.subMenu(linkText), retries)
  })

  this.Then(/^I expect the heading to be "([^"]*)"$/, function (text) {
    return this.getText(page.heading, retries).should.eventually.equal(text)
  })
}
