'use strict'

const page = {
  'Features': {xpath: '//*[@id="nav-features"]/a'},
  'subMenu': (linkText) => ({xpath: `//*[@id="nav-features"]//a[text()="${linkText}"]`}),
  'heading': {css: 'h1'}
}

const retries = 5
const hoverDelay = 1000

module.exports = function () {
  this.When(/^I hover over the "([^"]*)" menu link$/, function hoverMenuLinkStep (link) {
    return this.hover(page[link], hoverDelay, retries)
  })

  this.When(/^I click the "([^"]*)" submenu link$/, function clickSubmenuLinkStep (linkText) {
    return this.click(page.subMenu(linkText), retries)
  })

  this.Then(/^I expect the heading to be "([^"]*)"$/, function checkHeadingStep (text) {
    return this.getText(page.heading, retries).should.eventually.equal(text)
  })
}
