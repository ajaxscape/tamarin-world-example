'use strict'

const _ = require('lodash')
const pages = '../../automation_practice_features/pages'

module.exports = function () {
  this.Given(/^I visit the ([^"]*) page$/, function (page) {
    const pageObject = require(`${pages}/${_.snakeCase(page)}`)
    return this.visit(pageObject.url)
  })

  this.Then(/^I expect to see the text "([^"]*)"$/, function (text) {
    const findText = () => ({xpath: `//*[text()="${text}"]`})
    return this.waitFor(findText())
  })
}
