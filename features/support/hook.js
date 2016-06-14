'use strict'

module.exports = function () {
  this.World = require('tamarin-world') // overwrite default World constructor
  this.setDefaultTimeout(3600000)
}
