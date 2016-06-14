'use strict'

let _ = require('lodash')

module.exports = function () {
  this.When(/^I am signed out$/, function () {
    return this.visit('signOut')
      .then(() => this.notFind('header:myUsername'))
  })
}
