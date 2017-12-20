require('babel-register')()

const chai = require('chai')
const chaiEnzyme = require('chai-enzyme')
const fetch = require('isomorphic-fetch')

chai.use(chaiEnzyme())


const jsdom = require('jsdom')
const { JSDOM } = jsdom

const { window } = new JSDOM('')
global.window = window
global.document = window.document
