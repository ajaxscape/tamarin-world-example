'use strict'

const webDriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

module.exports = function () {
  this.World = require('tamarin-world') // overwrite default World constructor
  this.setDefaultTimeout(3600000)

  this.BeforeFeatures(function (next) {
    const service = new chrome.ServiceBuilder(require('chromedriver').path).build()
    chrome.setDefaultService(service)
    const driver = new webDriver.Builder()
        .withCapabilities(webDriver.Capabilities.chrome())
        .build()
    next()
  })
}
