'use strict'

const pages = '../../automation_practice_features/pages'
const homePage = require(`${pages}/home`)
const authenticationPage = require(`${pages}/authentication`)

module.exports = function () {
  this.Given(/^I sign in with the test user$/, function () {
    return this.click(homePage.signIn)
      .then(() => authenticationPage.signInTestUser(this))
  })
}

