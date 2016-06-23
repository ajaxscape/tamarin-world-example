'use strict'

const driver = require('./driver')
const tamarin = require('tamarin-world')
  .use(require('tamarin-page-object'))

module.exports = {
  World: class extends tamarin.World {
    constructor () {
      super(driver)
    }
  }
}

