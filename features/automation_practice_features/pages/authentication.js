'use strict'

const { host, baseUrl, testUser } = require('../config')
const url = `${host + baseUrl}?controller=athentication`

const page = {
  url,
  title: 'Login - My Store',
  email: { id: 'email' },
  password: { id: 'passwd' },
  login: { id: 'SubmitLogin' },
  signIn,
  signInTestUser
}

function signIn (world, { email, password }) {
  return world.waitForTitle(page.title)
    .then(() => Promise.all([
      world.sendKeys(page.email, email),
      world.sendKeys(page.password, password)
    ]))
    .then(() => world.click(page.login))
}

function signInTestUser (world) {
  return signIn(world, testUser)
}

module.exports = Object.freeze(page)

