'use strict'

const driver = require('./driver')

module.exports = {
  World: class extends require('tamarin-world').World {
    constructor () {
      super(driver)
    }
  }
}

