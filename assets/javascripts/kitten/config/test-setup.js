import { jsdom } from 'jsdom'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import fetch from 'isomorphic-fetch'
import 'mock-local-storage'

global.document = jsdom('')
global.window = document.defaultView
global.navigator = window.navigator

chai.use(chaiEnzyme())
