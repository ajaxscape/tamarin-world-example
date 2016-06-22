'use strict'

module.exports = function () {
  const driver = require('./world').driver
  this.World = require('./world').World // overwrite default World constructor
  this.setDefaultTimeout(3600000)

  this.AfterFeatures(function () {
    return driver.quit()
  })
}
