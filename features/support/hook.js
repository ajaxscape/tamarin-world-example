'use strict'

module.exports = function () {
  this.World = require('./world').World // overwrite default World constructor
  this.setDefaultTimeout(3600000)
}
