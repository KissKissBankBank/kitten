require('babel-register')()

const jsdom = require('jsdom').jsdom
const chai = require('chai')
const chaiEnzyme = require('chai-enzyme')
const fetch = require('isomorphic-fetch')

global.document = jsdom('')
global.window = document.defaultView

chai.use(chaiEnzyme())
