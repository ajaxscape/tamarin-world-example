'use strict'

const { host, baseUrl } = require('../config')
const url = host + baseUrl

const page = {
  url,
  signIn: { css: 'a.login' }
}

module.exports = Object.freeze(page)

