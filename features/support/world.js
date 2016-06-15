'use strict'

const webDriver = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')

module.exports = {
  World: class extends require('tamarin-world').World {
    constructor () {
      const service = new chrome.ServiceBuilder(require('chromedriver').path).build()
      chrome.setDefaultService(service)

      const driver = new webDriver.Builder()
        .withCapabilities(webDriver.Capabilities.chrome())
        .build()

      super(driver)
    }
  }
}

